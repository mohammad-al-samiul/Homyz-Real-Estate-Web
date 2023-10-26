import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
  const {
    data: menu = [],
    loading: menuLoading,
    refetch
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch(`https://regal-dragon-restaurant-server.vercel.app/menu`);
      return res.json();
    }
  });
  return [menu, menuLoading, refetch];
};

export default useMenu;
