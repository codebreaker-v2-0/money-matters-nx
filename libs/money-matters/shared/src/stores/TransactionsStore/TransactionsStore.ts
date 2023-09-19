import { makeAutoObservable } from 'mobx';

import TransactionModel from '../models/TransactionModel';

class TransactionsStore {
  _allTransactionsData: TransactionModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTransaction(transaction: TransactionModel) {
    this._allTransactionsData.push(transaction);
  }

  updateTransaction(transaction: TransactionModel) {
    const index = this._allTransactionsData.findIndex(
      (item) => item.details.transactionId === transaction.details.transactionId
    );
    this._allTransactionsData[index] = transaction;
  }

  deleteTransaction(transactionId: string) {
    const updatedData = this._allTransactionsData.filter(
      (item) => transactionId !== item.details.transactionId
    );
    this.allTransactionsData = updatedData;
  }

  get allTransactionsData() {
    return this._allTransactionsData;
  }

  set allTransactionsData(allTransactionsData: TransactionModel[]) {
    this._allTransactionsData = allTransactionsData;
  }

  clearStore() {
    this._allTransactionsData = [];
  }
}

export default TransactionsStore;
