import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../../Pages/Loader';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user && user.email) {
        return children
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

export default PrivateRoute;