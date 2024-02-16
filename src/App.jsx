import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PagesLogin from "./pages/accounts/PagesLogin";
import Forgot from "./pages/accounts/Forgot";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PagesLogin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
