import Quiz from "./components/Quiz";
import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mcq" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
