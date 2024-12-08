import { useQuery } from '@tanstack/react-query';
import { getUsers, QueryKeys } from './userService';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const UserListPage = () => {
  return (
    <UserListLoader>{(users) => <UserListView users={users} />}</UserListLoader>
  );
};

const UserListLoader = ({
  children,
}: {
  children: (users: User[]) => JSX.Element;
}) => {
  const { isLoading, data, error, isError } = useQuery<User[]>({
    queryKey:QueryKeys.users(),
    queryFn:getUsers
  });

  console.log({isError, isLoading, error})

  return children(data || []);
};

/* 
How will you handle the loading state
*/

const UserListView = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.length === 0 && <div> No Data</div>}
      {users.map((user) => (
        <div key={user.id}>
          {user.id} | {user.name} | {user.email}
        </div>
      ))}
    </div>
  );
};

export default UserListPage;
