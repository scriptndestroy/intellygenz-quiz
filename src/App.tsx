import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./features/details/Details";
import Home from "./features/home/Home";
import Layout from "./features/layout/Layout";
import NoMatch from "./features/nomatch/NoMatch";

function App() {
  return (
    <div className="App">
      Pagina Home ?
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='intellygenz-quiz/' element={<Home />} />
          <Route path='intellygenz-quiz/details' element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
