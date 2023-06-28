import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Protected from "./components/routing/Protected";
import { Usercontextprovider } from "./components/context/userContext";
import { Navcontextprovider } from "./components/context/navcontext";
import Sensores from "./pages/sensores";
import Datos from "./pages/datos";
import Graficos from "./pages/Graficos";
import Mapas from "./pages/Mapas";
import Informacion from "./pages/Informacion";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Usercontextprovider>
          <Navcontextprovider>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="/"
                element={
                  <Protected>
                    <Nav />
                  </Protected>
                }
              >
                <Route path="/graficos" element={<Graficos />} />
                <Route path="/sensores" element={<Sensores />} />
                <Route path="/datos" element={<Datos />} />
                <Route path="/mapas" element={<Mapas />} />
                <Route path="/informacion" element={<Informacion />} />
                
              </Route>
            </Routes>
          </Navcontextprovider>
        </Usercontextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
