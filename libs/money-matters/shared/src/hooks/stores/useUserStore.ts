import { useContext } from 'react';
import { UserStoreContext } from '../../context';

function useUserStore() {
  const userStore = useContext(UserStoreContext);

  if (!userStore) {
    throw new Error('Expected to be wrapped in User Store Provider');
  }

  return userStore;
}

export default useUserStore;
