import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" />
          <Route path="/Contact" />
          <Route path="/About" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
