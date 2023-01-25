import React from "react";
import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import "../../Style/Details.css";



// react-star-rating-component

const Details = () => {
  // state containing movie details
  const [currentMovieData, setCurrentMovieData] = useState(null);

  const currentMovieId = useMatch("Details/:id")?.params?.id;

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/shows/${currentMovieId}`)
      .then((res) => {
        console.log(res.data);
        setCurrentMovieData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentMovieId]);

  return (
    <div>
      <div className="container">
        <img src={currentMovieData?.image?.original} alt="" />

        <div className="textContentArea">
          <div className="nameRating">
            <h1>{currentMovieData?.name}</h1>
            <h1>{currentMovieData?.rating?.average}</h1>
            <div className="starRating">
              <StarRatingComponent
                name="Movie Rating"
                value={currentMovieData?.rating?.average / 2}
                starCount={5}
                starColor={"#FFD700"}
                emptyStarColor={"white"}
              />

              </div>
          </div>
          

          <div style={{ color: "white", display: "flex", gap: "10px" }}>
            <p>{currentMovieData?.ended ?? "NA"} | </p>

            <p>{currentMovieData?.averageRuntime ?? "NA"} |</p>
            <p>{currentMovieData?.director ?? "NA"}</p>
            {/* year, lengeth, director */}
            {/* cast */}
          </div>
          <div style={{ color: "white" }}>
            Cast: {currentMovieData?.cast ?? "Cast list unavailable"}
          </div>

          <div
            style={{ color: "white", maxHeight: "450px", overflow: "auto" }}
            dangerouslySetInnerHTML={{ __html: currentMovieData?.summary }}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
