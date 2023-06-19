import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import Card from "@mui/material/Card";

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieInfo = useSelector((store) => store.movieDetail);
  const genreInfo = useSelector((store) => store.genreDetail);
  console.log("Movie detail:", movieInfo);
  console.log("Genre:", genreInfo);

  useEffect(() => {
    dispatch({ type: "FETCH_THIS_MOVIE", payload: id });
    dispatch({ type: "FETCH_THIS_GENRE", payload: id });
  }, []);

  return (
    <div id="movie-detail">
      <a href="http://localhost:3000/">
        <button id="button">Return Home</button>
      </a>
      <p id="title">{movieInfo.title}</p>
      <div id="image container">
        <img src={movieInfo.poster} alt={movieInfo.title} />
      </div>
      <h4>
        Genre/s:{" "}
        {genreInfo.map((genre) => {
          return <div id="genre">{genre.name}</div>;
        })}
      </h4>

      <p id="description">{movieInfo.description}</p>
    </div>
  );
}

export default MovieDetail;
