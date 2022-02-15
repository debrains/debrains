import React from "react";
import { Route, Routes } from "react-router-dom";
import { TILHome } from "./TILHome";
import { Create } from "./Create";
import { Detail } from "./Detail";

function TIL(props) {
  return (
    <Routes>
      <Route path="/" exact element={<TILHome />} />
      <Route path="/detail/*" element={<Detail />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default TIL;
