import "./Components/City.scss";
import Next from "./Components/Other.jsx";
import "./Components/Other.scss";
import "./styles.scss";
import Primary from "./Components/Primary";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Hello from "./Components/Hello";

const App = () => {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/primary1" element={<Primary />} />
          <Route path="/hi" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
};
export default App;
