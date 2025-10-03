import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const navigation = useNavigate();
    const [users, setUsers] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [search, setSearch] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        fromAge: '',
        toAge: '',
        fromCreateDate: '',
        toCreateDate: '',
    });
 
    const _handleSearch = async (event) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    }

    const _handleFilter = async() => {
        var response = 
        await fetch(`https://localhost:7131/api/Users/GetAllUsersByFilter?name=${search.name}&phoneNumber=${search.phoneNumber}&address=${search.address}&fromAge=${search.fromAge}&toAge=${search.toAge}&fromCreateDate=${search.fromCreateDate}&toCreateDate=${search.toCreateDate}`)
        if(response.ok) {
            const data = await response.json();
            setUsers(data.model);
        }
        else {
            console.error('Failed to fetch filtered users');
        }
    }

    const _handleFetchUsers = async () => {
        var response = await fetch('https://localhost:7131/api/Users/GetAllUsers/');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setUsers(data.model);
        } else {
            console.error('Failed to fetch users');
        }
    }

    const _handleClearFilter = () => {
        setSearch({
            name: '',
            phoneNumber: '',
            address: '',
            fromAge: '',
            toAge: '',
            fromCreateDate: '',
            toCreateDate: '',
        })
        _handleFetchUsers()
    }


    const _handleCloseFilter = async () => {
        setShowFilter(false)
        
    }

    useEffect(() => {
        _handleFetchUsers();
    }, []);

    return (
        <div className="full-container lg-12 m-5">
            <button type="button" className="btn btn-success m-2" onClick={() => navigation('/add')}>Add User</button>
            <button type="button" className="btn btn-info m-2" onClick={() => setShowFilter(true)}>Filter User</button>
            <div className="card p-5 mt-3 mb-3 col-md-612 justify-content-center" style={{ display: `${showFilter ? "block" : "none"}`}}>
                <div className="container">
                    <div className="row">
                        <div className='form-group mb-2 col-md-4'>
                            < label>Name</ label>
                            <input className="form-control" type="text" name="name" onChange={(e) => { _handleSearch(e) }} />
                        </div>
                        <div className='form-group mb-2 col-md-4'>
                            < label>PhoneNumber</ label>
                            <input className="form-control" type="text" name="phoneNumber" onChange={(e) => { _handleSearch(e) }} />
                        </div>
                        <div className='form-group mb-2 col-md-4'>
                            < label>Address</ label>
                            <input className="form-control" type="text" name="address" onChange={(e) => { _handleSearch(e) }} />
                        </div>
                    </div>
                    <div className="row">
                        < label>Age</ label>
                        <div className='mb-2 col-md-4'>
                            <div className="input-group mb-2 col-md-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">From</div>
                                </div>
                                <input type="text" className="form-control" name="fromAge" onChange={(e) => { _handleSearch(e) }}/>
                            </div>
                        </div>
                        <div className='mb-2 col-md-4'>
                            <div className="input-group mb-2 col-md-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">To</div>
                                </div>
                                <input type="text" className="form-control" name="toAge" onChange={(e) => { _handleSearch(e) }}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <label>Create Date</ label>
                        <div className='mb-2 col-md-4'>
                            <div className="input-group mb-2 col-md-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">From</div>
                                </div>
                                <input type="text" className="form-control" name="fromCreateDate" onChange={(e) => { _handleSearch(e) }}/>
                            </div>
                        </div>
                        <div className='mb-2 col-md-4'>
                            <div className="input-group mb-2 col-md-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">To</div>
                                </div>
                                <input type="text" className="form-control"  name="toCreateDate" onChange={(e) => { _handleSearch(e) }}/>
                            </div>
                        </div>
                    </div>
                     <button type="button" className="btn btn-success mt-2 mb-2" onClick={() =>_handleFilter()}>Apply</button>
                    <button type="button" className="btn btn-secondary mt-2 mb-2 ml-2" onClick={() => _handleCloseFilter()}>Close</button>
                    <button type="button" className="btn btn-outline-secondary mt-2 mb-2 ml-2" onClick={() => _handleClearFilter()}>Clean</button>
                </div>

            </div>
            <table className="table table-striped" border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>Name</th>
                        <th>PhoneNumber</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.address}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button type="button" className="btn btn-outline-secondary m-1" onClick={() => navigation(`/view/${user.id}`)}>View</button>
                                <button type="button" className="btn btn-danger m-1" onClick={() => navigation(`/delete/${user.id}`)}>Delete</button>
                                <button type="button" className="btn btn-warning m-1" onClick={() => navigation(`/edit/${user.id}`)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default UserList;