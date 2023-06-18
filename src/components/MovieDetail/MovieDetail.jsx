import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
    <div className="movie-detail">
      <h3>{movieInfo.title}</h3>
      <img src={movieInfo.poster} alt={movieInfo.title} />
      <p>{movieInfo.description}</p>
    </div>
  );
}

export default MovieDetail;
