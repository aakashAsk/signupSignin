import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/homePage/home";
import NoPage from "./components/noPage/noPage";

function App() {
  return (
    <BrowserRouter>
        <section className="wrapper">
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </section>
    </BrowserRouter>
  );
}

export default App;
