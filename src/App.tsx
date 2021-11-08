import './App.css';
import OrdersModule from './modules/orders/insfrastructure';
import { Header } from "./components/header/Header";
import { Search } from './components/Search/search';

function App() {

  return (
    <div className="App-container">
      <Header />

      <div style={{ width: "85%", margin: "0 auto", minHeight: "100vh" }}>
        <Search></Search>

        <div style={{ margin: "0", display: "flex", gap: "30px" }}>


          <div style={{ flex: 2 }}>
            <div className="item">
              <h4>ITEMS</h4>
            </div>
          </div>

          <div style={{ flex: 1 }}>

            <div className="item" style={{ display: "flex", flexDirection: "column", gap: "30px", padding: "3rem" }}>

              <div>
                <h4>INFORMACION DE CLIENTE</h4>
              </div>
              <hr />

              <div className="flex flex-dir-col gap-20">
                <span>
                  JOSHERT WILMER PARRA CARDONA
                </span>
                <span>
                  Cedula: 1143831929
                </span>

              </div>

              <hr />

              <div className="flex flex-dir-col gap-20">


                <strong>
                  DIRECCION
                </strong>
                <span>
                  KR 54 A # 5 A - 21 <br />
                  CALI, VALLE

                </span>


                <span>
                  Apto 902A
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );

}

export default App;
