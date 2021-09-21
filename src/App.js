import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddTransction } from './components/AddTransction';
import { ShowTransction } from './components/ShowTransction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />

    <div className='container'>
      < Balance />
      < IncomeExpenses />
      < ShowTransction />
      < AddTransction />

      </div> 
    </GlobalProvider>
  );
}

export default App;
