import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ListView from './UserListPage';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Users</div>
      <br />
      <ListView />
    </QueryClientProvider>
  );
}
