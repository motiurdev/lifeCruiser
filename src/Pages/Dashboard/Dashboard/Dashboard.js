import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Dashboard.css"


const Dashboard = () => {
    const { logOut } = useAuth()
    return (
        <div>
            <div className="sidebar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="dashboard">Dashboard</NavLink>
                <NavLink to="/dashboard/manageBlogs">ManageBlog</NavLink>
                <NavLink to="/dashboard/experience">Experience</NavLink>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
                <NavLink to="/"><button onClick={() => logOut()} className='dashboard-logout'>Logout</button></NavLink>
            </div>

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;