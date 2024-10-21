import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ Component }) {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated === false || isAuthenticated == null) {
            navigate('/login');
        }
    }, []);

    // Render the component only if authenticated
    return (
        <div>
            {Component}
        </div>
    )
}

export default ProtectedRoute;
