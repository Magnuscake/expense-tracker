import React from 'react';

import { Header } from '../Header/Header';
import { Balance } from '../Balance/Balance';
import { Expenses } from '../Expenses/Expenses';
import { TransactionList } from '../TransactionList/TransactionList';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
      </div>
    </div>
  );
};

export default App;
