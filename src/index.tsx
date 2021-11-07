import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Providers } from './provider/providers';
import { OrderService } from './modules/orders/domain/services/order-service';
import { OrderRepository } from './modules/orders/domain/repositories/order-repository';
import RegisterSupplier from './provider/domain/services/register-supplier';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


new Providers().register({
  "ORDER-SERVICE": new RegisterSupplier<OrderRepository>({
    config: {
      injector: new OrderService()
    }
  }),
  "ORDER-SERVICE2": new RegisterSupplier<OrderRepository>({
    config: {
      injector: new OrderService()
    }
  }),
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
