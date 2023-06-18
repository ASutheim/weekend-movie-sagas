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

  return (
    <div>
      <h3>Add a movie to the list:</h3>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input type="text" value="title" placeholder="Title" required />
        <input type="text" value="image" placeholder="Image URL" />
        <textarea name="description" id="description" rows="4" cols="50">
          A description of the movie
        </textarea>
      </form>
    </div>
  );
};

export default AddMovie;
