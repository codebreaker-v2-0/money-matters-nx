import { PropsWithChildren, useRef } from 'react';
import TransactionsStore from './stores/TransactionsStore/TransactionsStore';
import UserStore from './stores/UserStore/UserStore';
import { TransactionsStoreContext, UserStoreContext } from './context';

const MoneyMattersStoresProvider: React.FC<PropsWithChildren> = (props) => {
  const transactionsStoreRef = useRef(new TransactionsStore());
  const userStoreRef = useRef(new UserStore());

  return (
    <TransactionsStoreContext.Provider value={transactionsStoreRef.current}>
      <UserStoreContext.Provider value={userStoreRef.current}>
        {props.children}
      </UserStoreContext.Provider>
    </TransactionsStoreContext.Provider>
  );
};

export default MoneyMattersStoresProvider;