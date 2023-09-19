export interface TransactionModelProps {
    transactionId: string;
    userId: string;
    transactionName: string;
    type: 'credit' | 'debit';
    category: string;
    amount: number;
    date: Date;
}