import React from "react";
import Homepage from "./component/Homepage";
// import { Routes, Route } from "react-router";
import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./layouts/Layout";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </div>

      {/* Cookie Consent appears after loading */}
    </>
  );
};
export default App;
