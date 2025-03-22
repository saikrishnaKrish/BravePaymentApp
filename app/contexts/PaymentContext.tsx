import React, { createContext, useState, ReactNode } from 'react';

type Payment = {
  id: string;
  amount: number;
  category: string;
  date: string;
};

type PaymentContextType = {
  payments: Payment[];
  addPayment: (payment: Payment) => void;
};

export const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [payments, setPayments] = useState<Payment[]>([]);

  const addPayment = (payment: Payment) => setPayments((prev) => [...prev, payment]);

  return (
    <PaymentContext.Provider value={{ payments, addPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};
