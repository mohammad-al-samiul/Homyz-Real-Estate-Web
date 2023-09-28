import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useAdmin = () => {
  const token = localStorage.getItem('access-token');
  const { user } = useContext(AuthContext);
  const { data: admin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/user/admin/${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`
        }
      }).then((res) => res.json())
  });
  return [admin, isAdminLoading];
};

export default useAdmin;
