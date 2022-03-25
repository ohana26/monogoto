import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/LoginPage";
import Homepage from "./Pages/Homepage/Homepage";
import Page404 from "./Pages/ErrorPage/404.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<Page404></Page404>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
