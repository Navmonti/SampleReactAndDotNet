import react, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import userService from '../../services/userService';

const AddUser = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        phoneNumber: '',
        username: '',
        email: '',
        address: '',
        age: ''
    })

    const _onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const _handleSubmit = async () => {
        const res = await userService.add(data);
        if (res.ok) {
            console.log('User added successfully');
            navigate('/')
        } else {
            console.error('Failed to add user');
        }
    }

    return (
        <card className='card m-5 col-md-6 mx-auto' style={{ margin: "auto" }}>
            <div class="card-header">
                <h3 className='text-center mt-1'>Add User</h3>
            </div>
            <div class="card-body p-5">
                <div className='form-group mb-2'>
                    <lable>Name</lable>
                    <input class="form-control" type="text" name="name" onChange={(e) => { _onChange(e) }} />
                </div>
                <div className='form-group mb-2'>
                    <lable>Phone Number</lable>
                    <input class="form-control" type="text" name="phoneNumber" onChange={(e) => { _onChange(e) }} />
                </div>
                <div className='form-group mb-2'>
                    <lable>Address</lable>
                    <input class="form-control" type="text" name="address" onChange={(e) => { _onChange(e) }} />
                </div>
                <div className='form-group mb-2'>
                    <lable>Email</lable>
                    <input class="form-control" type="text" name="email" onChange={(e) => { _onChange(e) }} />
                </div>
                <div className='form-group mb-2'>
                    <lable>Username</lable>
                    <input class="form-control" type="text" name="username" onChange={(e) => { _onChange(e) }} />
                </div>
                <div className='form-group mb-2'>
                    <lable>Age</lable>
                    <input class="form-control" type="text" name="age" onChange={(e) => { _onChange(e) }} />
                </div>
                <button type="submit" class="btn btn-success m-2" onClick={() => _handleSubmit()}>Save</button>
                <button type="button" class="btn btn-outline-dark m-2" onClick={() => navigate('/')}>Back</button>
            </div>
        </card>

    )
}

export default AddUser;