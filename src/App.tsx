import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./features/home/Home";
import Layout from "./features/layout/Layout";
import NoMatch from "./features/nomatch/NoMatch";

function App() {
  return (
    <div className="App">
      Pagina Home ?
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
