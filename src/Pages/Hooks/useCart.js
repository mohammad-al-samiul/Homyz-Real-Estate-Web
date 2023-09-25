/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const useCart = () => {
  const { user } = useContext(AuthContext);
  const {
    data: cart = [],
    refetch,
    isLoading
  } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
      return response.json();
    }
  });
  return [cart, refetch, isLoading];
};
export default useCart;
