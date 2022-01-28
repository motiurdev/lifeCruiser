import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./Dashboard.css"


const Dashboard = () => {

    return (
        <div>
            <div className="sidebar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="dashboard">Dashboard</NavLink>
                <NavLink to="/dashboard/manageBlogs">ManageBlog</NavLink>
                <NavLink to="/dashboard/experience">Experience</NavLink>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
            </div>

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;