import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    if (user && user.email) {
        return children
    }
    else{
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;