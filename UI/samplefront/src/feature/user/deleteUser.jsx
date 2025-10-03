import react, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  

const DeleteUser = () => {
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

    const _handleDeleteUser = async () => { 
        var response = await fetch(`https://localhost:7131/api/Users/DeleteUser/id?id=${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('User deleted successfully');
            navigate('/');
        } else {
            console.error('Failed to delete user');
        }
    }

    useEffect(() => {
        _fetchUserData();
    }, []);

    return (
           <card className='card m-5 col-md-6 mx-auto' style={{ margin: "auto" }}>
            <div class="card-header">
                <h3 className='text-center mt-1'>Delete User</h3>
            </div>
            <div class="card-body p-5">
                <div className='form-group mb-2'>
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" value={data.name} disabled />
                </div>
                <div className='form-group mb-2'>
                    <label>Phone Number</label>
                    <input className="form-control" type="text" name="phoneNumber" value={data.phoneNumber} disabled />
                </div>
                <div className='form-group mb-2'>
                    <label>Address</label>
                    <input className="form-control" type="text" name="address" value={data.address} disabled />
                </div>
                <div className='form-group mb-2'>
                    <label>Email</label>
                    <input className="form-control" type="text" name="email" value={data.email} disabled />
                </div>
                <div className='form-group mb-2'>
                    <label>Username</label>
                    <input className="form-control" type="text" name="username" value={data.username} disabled />
                </div>
                <div className='form-group mb-2'>
                    <label>Age</label>
                    <input className="form-control" type="text" name="age" value={data.age} disabled />
                </div>
                <div className='justify-content-center'>
                    <button className="btn btn-danger" onClick={_handleDeleteUser}>Delete</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancel </button>
                </div>
            </div>
        </card> 
    );
}

export default DeleteUser;