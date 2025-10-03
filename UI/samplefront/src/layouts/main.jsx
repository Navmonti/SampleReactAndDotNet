import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from '../feature/user/listUser';
import AddUser from '../feature/user/addUser';
import EditUser from '../feature/user/editUser';
import ViewUser from '../feature/user/viewUser';
import DeleteUser from '../feature/user/deleteUser';


const MainLayout = ({ children }) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/list" element={<UserList />} />
                <Route path="/delete/:id" element={<DeleteUser/>} />
                <Route path="/edit/:id" element={<EditUser />} />
                <Route path="/view/:id" element={<ViewUser/>} />
                <Route path="/add" element={<AddUser />} />
            </Routes>
        </Router>
    );
}

export default MainLayout;