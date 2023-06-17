import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("Movie detail:", id);
}

export default MovieDetail;
