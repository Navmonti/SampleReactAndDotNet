import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        username: '',
        address: '',
        age: ''
    });

    const _onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const _fetchUserData = async () => {
        var response = await fetch(`https://localhost:7131/api/Users/GetUserById?id=${id}`, {
            method: 'GET'
        });
        if (response.ok) {
            const userData = await response.json();
            setData(userData.model);
        } else {
            console.error('Failed to fetch user data');
        }
    };

    const _handleSubmit = async () => {
        var response = await fetch('https://localhost:7131/api/Users/UpdateUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        debugger;
        if (response.ok) {
            debugger;
            console.log('User updated successfully');
            navigate('/')
        } else {
            console.error('Failed to update user');
        }
    }

    useEffect(() => {
        _fetchUserData();
    }, []);

    return (
        <card className='card m-5 col-md-6 mx-auto' style={{ margin: "auto" }}>
            <div class="card-header">
                <h3 className='text-center mt-1'>Edit User</h3>
            </div>
            <div class="card-body p-5">
                <div className='form-group mb-2'>
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" onChange={(e) => { _onChange(e) }} value={data.name} />
                </div>
                <div className='form-group mb-2'>
                    <label>Phone Number</label>
                    <input className="form-control" type="text" name="phoneNumber" onChange={(e) => { _onChange(e) }} value={data.phoneNumber} />
                </div>
                <div className='form-group mb-2'>
                    <label>Address</label>
                    <input className="form-control" type="text" name="address" onChange={(e) => { _onChange(e) }} value={data.address} />
                </div>
                <div className='form-group mb-2'>
                    <label>Email</label>
                    <input className="form-control" type="text" name="email" onChange={(e) => { _onChange(e) }} value={data.email} />
                </div>
                <div className='form-group mb-2'>
                    <label>Username</label>
                    <input className="form-control" type="text" name="username" onChange={(e) => { _onChange(e) }} value={data.username} />
                </div>
                <div className='form-group mb-2'>
                    <label>Age</label>
                    <input className="form-control" type="text" name="age" onChange={(e) => { _onChange(e) }} value={data.age} />
                </div>
                <div className='justify-content-center'>
                    <button type="submit" className="btn btn-success m-2" onClick={() => _handleSubmit()}>Save</button>
                    <button type="button" className="btn btn-outline-dark m-2" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </div>
        </card>
    )
}

export default EditUser;