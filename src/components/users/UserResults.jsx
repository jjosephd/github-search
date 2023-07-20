import { useEffect, useState } from 'react';
import Spinner from '../layout/spinner';
import UserItem from './userItem';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${'https://api.github.com'}/users`, {
      headers: {
        Authorization: `token ${'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'}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user}>

          </UserItem>
        ))}
      </div>
    );
  } else {
    return <Spinner/>
  }
  
};

export default UserResults;
