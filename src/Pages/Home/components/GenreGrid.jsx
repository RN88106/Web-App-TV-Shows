import React from "react";
import "../../../Style/stories.css";
import MovieCard from "./MovieCard";

// will render a single genre
const GenreGrid = ({ genreName, moviesData }) => {
  return (
    <>
      <h1>{genreName}</h1>
      <div className="containerHome">
        {moviesData?.map((item, index) => (
          <MovieCard movieData={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default GenreGrid;
