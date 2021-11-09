import './App.css';
import OrdersModule from './modules/orders/insfrastructure';
import { Header } from "./components/header/Header";
import { Search } from './components/Search/search';
import { Customer } from './components/customer/Customer';
import { FlexElement } from './components/layout/Flex-Element';
import { Items } from './components/orders/item/Items';
import { Container } from './components/container/Container';

function App() {

  return (
    <div className="App-container">
      <Header />

      <div style={{ width: "85%", margin: "0 auto", minHeight: "100vh" }}>
        <Search></Search>

        <Container>

          <FlexElement flex={2}>
            <Items></Items>
          </FlexElement>

          <FlexElement flex={1}>
            <Customer></Customer>
          </FlexElement>

        </Container>
      </div >
    </div >
  );

}

export default App;
