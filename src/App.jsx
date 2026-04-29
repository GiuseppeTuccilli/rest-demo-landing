import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import { useRef, useState } from "react";

function App() {
  const [position, setPosition] = useState(0);
  const mainCtn = useRef(null);
  const handleScroll = () => {
    setPosition(mainCtn.current.scrollTop);
  };

  return (
    <>
      <BrowserRouter>
        <div className="maincontainer" ref={mainCtn} onScroll={handleScroll}>
          <MyNav position={position} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" />
            <Route path="/Contact" />
            <Route path="/About" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
