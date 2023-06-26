import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default Router;
