import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment } from './features/counter/counter-slice';
import OrdersModule from './modules/orders/insfrastructure';

function App() {

  const provider = useAppSelector(({ serviceProvider }) => serviceProvider.value);


  useEffect(() => {

    console.log(provider.providingService("ORDER-SERVICE"));

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <OrdersModule></OrdersModule>
        RO
        WELCOME to React.
      </header>

    </div>
  );

}


export default App;
