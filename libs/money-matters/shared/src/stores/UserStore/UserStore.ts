import Cookies from 'js-cookie';
import { makeAutoObservable } from 'mobx';

const initialUserData = {
  name: '',
  email: '',
  country: null,
  dateOfBirth: new Date(),
  city: null,
  permanentAddress: null,
  postalCode: null,
  presentAddress: null,
};

interface userDataProps {
  name: string;
  email: string;
  country: null;
  dateOfBirth: Date;
  city: null;
  permanentAddress: null;
  postalCode: null;
  presentAddress: null;
}

class UserStore {
  private _userId: string | undefined;
  private _userData: userDataProps = { ...initialUserData };

  constructor() {
    makeAutoObservable(this);
    this._userId = Cookies.get('user_id');
  }

  set userId(userId: string) {
    this._userId = userId;
  }

  set userData(userData: userDataProps) {
    this._userData = userData;
  }

  get userId(): string | undefined {
    return this._userId;
  }

  get userData(): userDataProps {
    return this._userData;
  }

  get isAdmin() {
    return this.userId === '3';
  }

  clearStore() {
    this._userId = '';
    this._userData = { ...initialUserData };
  }
}

export default UserStore;
