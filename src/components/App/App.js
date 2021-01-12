import React from 'react';

import { Header } from '../Header/Header';
import { Balance } from '../Balance/Balance';
import { Expenses } from '../Expenses/Expenses';
import { TransactionList } from '../TransactionList/TransactionList';
import { AddTransaction } from '../AddTransaction/AddTransaction';

import { GlobalProvider } from '../../context/GlobalState';

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
