import React, { useContext } from 'react';

import { TransactionsStoreContext } from '../../context';

function useTransactionStore() {
  const transactionsStore = useContext(TransactionsStoreContext);

  if (!transactionsStore) {
    throw new Error('Expected to be wrapped in Transactions Store Provider');
  }

  return transactionsStore;
}

export default useTransactionStore;
