import { Routes, Route, useLocation} from "react-router-dom";
import Nabvar from "./pages/struct/Nabvar";
import Login from "./pages/accounts/Login";
import Home from "./pages/Home";
import { useState } from "react";
import { MyContextProvider } from './lib/context';
import PagesLogin from "./pages/accounts/PagesLogin";

function App() {
  const location = useLocation();
  const {pathname} = location;
  const Logear = localStorage.getItem("isLogged");
  return (

    <MyContextProvider>
      {pathname !== "/login" && <Nabvar Logear={Logear}/>}
      <Routes>
        <Route path="/" element={<Home Logear={Logear} />} />
        <Route path="/login" element={<PagesLogin/>} />
      </Routes>
    </MyContextProvider>
  );
}

export default App;
