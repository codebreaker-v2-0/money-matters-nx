import { createContext } from "react";

import TransactionsStore from '../stores/TransactionsStore/TransactionsStore'
import UserStore from '../stores/UserStore/UserStore'

export const TransactionsStoreContext = createContext<TransactionsStore | null>(null)
export const UserStoreContext = createContext<UserStore | null>(null)