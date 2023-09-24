/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>loading...</div>;
  }
  if (!user) {
    return <Navigate to={'login'} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;