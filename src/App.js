import React from 'react';
import './App.css';
import './Nav/Nav.js';
import AppRouter from './Nav/Nav.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Transactions from './Transactions/Transactions.js';
import CashFlow from './CashFlow/CashFlow.js'
import Accounts from './Accounts/Accounts.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/transactions/" component={Transactions} />
        <Route path="/cashFlow/" component={CashFlow} />
        <Route path="/accounts/" component={Accounts} />
        <AppRouter></AppRouter>
      </div>
    </BrowserRouter>
  );
}

export default App;
