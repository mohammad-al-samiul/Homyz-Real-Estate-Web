import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
  const {
    data: menu = [],
    loading: menuLoading,
    refetch
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/menu`);
      return res.json();
    }
  });
  return [menu, menuLoading, refetch];
};

export default useMenu;
