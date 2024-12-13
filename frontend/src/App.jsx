import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import ValidateUser from "./helper/validate.js";

function App() {
  return (
    <BrowserRouter>
      <ValidateUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
