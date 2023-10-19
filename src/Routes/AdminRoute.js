/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Pages/Hooks/useAdmin';
import { AuthContext } from '../Providers/AuthProvider';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [admin, isAdminLoading] = useAdmin();

  if (loading && isAdminLoading) {
    return <div>loading...</div>;
  }
  const isAdmin = admin.admin;
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default AdminRoute;
