import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@/views/Home";
import { Task } from "@/views/Task";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
};
