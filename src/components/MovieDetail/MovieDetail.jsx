import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieInfo = useSelector((store) => store.detail);
  console.log("Movie detail:", movieInfo);

  useEffect(() => {
    dispatch({ type: "FETCH_THIS_MOVIE", payload: id });
  }, []);

  return (
    <div class="movie-detail">
      <h3>{movieInfo.title}</h3>
      <img src={movieInfo.poster} alt={movieInfo.title} />
      <p>{movieInfo.description}</p>
    </div>
  );
}

export default MovieDetail;
