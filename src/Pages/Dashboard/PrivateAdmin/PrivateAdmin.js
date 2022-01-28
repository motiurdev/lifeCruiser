import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateAdmin = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" />
    }

    if (user.email && admin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateAdmin;