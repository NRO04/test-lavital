import './App.css';
import { Header } from "./components/header/Header";
import { Search } from './components/Search/search';
import { Customer } from './components/customer/Customer';
import { FlexElement } from './components/layout/Flex-Element';
import { Items } from './components/orders/item/Items';
import { Container } from './components/container/Container';
import { useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { InitServices } from './components/initServices/IinitServices';

function App() {

  const isloaded = useAppSelector(({ isLoadComponent }) => isLoadComponent).value;
  const msg = useAppSelector(({ globalMsg }) => globalMsg.value);

  useEffect((): void => {

  }, [isloaded]);

  return (
    <div className="App-container">
      <Header />

      <div style={{ width: "85%", margin: "0 auto", minHeight: "100vh" }}>
        <Search></Search>
        <InitServices>

          {isloaded && <Container>

            <FlexElement flex={2}>
              <Items></Items>
            </FlexElement>

            <FlexElement flex={1}>
              <Customer></Customer>
            </FlexElement>

          </Container>
          }
        </InitServices>

        {!isloaded && <div className="flex flex-dir-col jc-center align-i-center"> <h2>{msg}</h2></div>}

      </div >
    </div >
  );

}

export default App;
