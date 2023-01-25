import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Style/stories.css";

// will render a single movie card within a genre
const MovieCard = ({ movieData }) => {
  console.log(movieData);
  const navigate = useNavigate();

  //clicked on movie-> navigate to movie details page
  const handleMovieClick = () => {
    navigate(`/Details/${movieData?.show?.id}`);
  };

  return (
    <div className="card">
      <img
        src={movieData?.show?.image?.medium}
        alt={movieData?.show?.name}
        onClick={() => handleMovieClick()}
      />
    </div>
  );
};

export default MovieCard;
