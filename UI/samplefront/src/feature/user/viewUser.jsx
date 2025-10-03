import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        age: ''
    });

    const _fetchUserData = async () => {
        try {
            var response = await fetch(`https://localhost:7131/api/Users/GetUserById?id=${id}`, {
                method: 'GET'
            });
            debugger;
            if (response.ok) {
                const userData = await response.json();
                setData(userData.model);
            } else {
                console.error('Failed to fetch user data');
            }
        }
        catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        _fetchUserData();
    }, []);

    return (
            <card className='card m-5 col-md-6 mx-auto' style={{ margin: "auto" }}>
                <div></div>
                <div class="card-header">
                    <h3 className='text-center mt-1'>View User</h3>
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
                        <label>Age</label>
                        <input className="form-control" type="text" name="address" value={data.age} disabled />
                    </div>
                    <div className='form-group mb-2'>
                        <label>Email</label>
                        <input className="form-control" type="text" name="address" value={data.email} disabled />
                    </div>
                    <div className='form-group mb-2'>
                        <label>Username</label>
                        <input className="form-control" type="text" name="address" value={data.username} disabled />
                    </div>
                    <button type="button" className="btn btn-dark mt-2 mr-2 mb-2" onClick={() => navigate('/')}>Back</button>
                </div>
            </card>
    )
}

export default ViewUser;