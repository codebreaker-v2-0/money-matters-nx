import { makeAutoObservable } from 'mobx';
import { TransactionModelProps } from '../types';

class TransactionModel {
  private readonly _transactionId: string;
  private readonly _userId: string;
  private _transactionName: string;
  private _type: 'credit' | 'debit';
  private _category: string;
  private _amount: number;
  private _date: Date;

  constructor(data: TransactionModelProps) {
    this._transactionId = data.transactionId;
    this._transactionName = data.transactionName;
    this._type = data.type;
    this._category = data.category;
    this._amount = data.amount;
    this._date = data.date;
    this._userId = data.userId;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  set transactionName(name: string) {
    this._transactionName = name;
  }

  set type(type: 'credit' | 'debit') {
    this._type = type;
  }

  set category(category: string) {
    this._category = category;
  }

  set amount(amount: number) {
    this._amount = amount;
  }

  set date(date: Date) {
    this._date = date;
  }

  get details() {
    return {
      transactionId: this._transactionId,
      userId: this._userId,
      transactionName: this._transactionName,
      type: this._type,
      category: this._category,
      amount: this._amount,
      date: this._date,
    };
  }

  stringify(action: 'add' | 'update'): string {
    if (action === 'add') {
      return JSON.stringify({
        name: this._transactionName,
        type: this._type,
        category: this._category,
        amount: this._amount,
        date: this._date,
        user_id: this._userId,
      });
    }
    return JSON.stringify({
      name: this._transactionName,
      type: this._type,
      category: this._category,
      amount: this._amount,
      date: this._date,
      id: this._transactionId,
    });
  }
}

export default TransactionModel;
