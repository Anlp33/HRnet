import "./styles/index.css";
import Home from "./pages/home";
import Error from "./pages/error";
import Employees from "./pages/employee-list";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
