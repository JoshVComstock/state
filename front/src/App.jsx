import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Protected from "./components/routing/Protected";
import { Usercontextprovider } from "./components/context/userContext";
import { Navcontextprovider } from "./components/context/navcontext";


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
          ></Route>
        </Routes>
        </Navcontextprovider>
        </Usercontextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
