import './App.css';
import OrdersModule from './modules/orders/insfrastructure';
import { Header } from "./components/header/Header";
import { Search } from './components/Search/search';
import { Customer } from './components/customer/Customer';
import { FlexElement } from './components/layout/Flex-Element';

function App() {

  return (
    <div className="App-container">
      <Header />

      <div style={{ width: "85%", margin: "0 auto", minHeight: "100vh" }}>
        <Search></Search>

        <div style={{ margin: "0", display: "flex", gap: "30px" }}>


          <FlexElement flex={2}>
            <div className="flex flex-dir-col gap-20 pd-40 item">
              <h4>ITEMS</h4>

              <div className="flex row gap-40" style={{ borderRadius: "15px", backgroundColor: "#faf7fa" }}>

                <div className="flex jc-center align-i-center">
                  <img alt="Sin imagen" />
                </div>

                <div className="flex flex-dir-row">

                  <div className="flex flex-dir-col pd-30 gap-10">
                    <div>
                      <strong>
                        NOMBRE DE ITEM
                      </strong>
                    </div>
                    <h4>
                      ID ITEM: 585454
                    </h4>
                    <strong>

                      # ID ITEM

                    </strong>


                  </div>

                  <div style={{ display: "inline-flex" }}>
                    <div>
                      CODIGO UBICACION DE ESTANTERIA
                    </div>
                  </div>

                </div>


              </div>

              <div className="flex row gap-40" style={{ borderRadius: "15px", backgroundColor: "#faf7fa" }}>

                <div className="flex jc-center align-i-center">
                  <img alt="Sin imagen" />
                </div>

                <div className="flex flex-dir-row">

                  <div className="flex flex-dir-col pd-30 gap-10">
                    <div>
                      <strong>
                        NOMBRE DE ITEM
                      </strong>
                    </div>
                    <h4>
                      ID ITEM: 585454
                    </h4>
                    <strong>

                      # ID ITEM

                    </strong>


                  </div>

                  <div style={{ display: "inline-flex" }}>
                    <div>
                      CODIGO UBICACION DE ESTANTERIA
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </FlexElement>

          <FlexElement flex={1}>
            <Customer></Customer>
          </FlexElement>

        </div>

      </div >
    </div >
  );

}

export default App;
