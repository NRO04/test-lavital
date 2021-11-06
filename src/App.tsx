import React from 'react';
import logo from './logo.svg';
import './App.css';
import OrdersModule from './modules/orders/insfrastructure';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <OrdersModule></OrdersModule>
        WELCOME Lavital to React.
      </header>
      
    </div>
  );
}

export default App;
