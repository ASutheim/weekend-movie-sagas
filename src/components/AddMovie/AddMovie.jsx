import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AddMovie = () => {
  const dispatch = useDispatch();

  let [newMovie, setNewMovie] = useState({}); //structure object

  const handleInput = (event) => {
    setNewMovie({}); //structure object
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    setNewMovie({}); //reset store
  };


  return 
};

export default AddMovie;
