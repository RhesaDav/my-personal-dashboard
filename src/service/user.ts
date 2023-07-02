import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { http } from '@/http';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useListUser = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const {data} = await http.get('/users');
      return data;
    }
  })
};
