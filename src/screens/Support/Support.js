import React from "react";
import { Route, Routes } from "react-router-dom";
import { Event } from "./Event";
import { Notice } from "./Notice";
import { Question } from "./Question";

function Support(props) {
  return (
    <Routes>
      <Route path="/event/*" exact element={<Event />} />
      <Route path="/notice/*" element={<Notice />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  );
}

export default Support;
