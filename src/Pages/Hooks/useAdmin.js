import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useAdmin = () => {
  const token = localStorage.getItem('access-token');
  const { user, loading } = useContext(AuthContext);
  const { data: admin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://regal-dragon-restaurant-server.vercel.app/user/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`
          }
        }
      );
      return res.json();
    }
  });
  return [admin, isAdminLoading];
};

export default useAdmin;
