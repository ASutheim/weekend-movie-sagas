import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("Movie detail:", id);

  useEffect(() => {
    dispatch({ type: "FETCH_THIS_MOVIE", payload: id });
  }, []);
}

export default MovieDetail;
