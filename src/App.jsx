import "./App.css";
import Register from "./Form/Register";
import Homepage from "./page/Home";
import AnnualPage from "./page/Annual.page";
import MidTermPage from "./page/midTerm.page";
import TermlyPage from "./page/Termly.page";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [resultType, setResultType] = useState("");

  return (
    <div className="p-5">
      {/* <Registers /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Homepage resultType={resultType} setResultType={setResultType} />
          }
        />

        <Route path="/Mid-Term" element={<Register resultType="Mid-Term" />} />
        <Route path="/Annual" element={<Register resultType="Annual" />} />
        <Route path="/Termly" element={<Register resultType="Termly" />} />
      </Routes>
    </div>
  );
}

export default App;
