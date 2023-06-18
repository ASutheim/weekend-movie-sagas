import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AddMovie = () => {
  const dispatch = useDispatch();

  let [newMovie, setNewMovie] = useState({
    title: "",
    image: "",
    description: "",
    // genre: ??????,
  }); //structure object


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
        <input
          type="text"
          id="title"
          value="title"
          placeholder="Title"
          required
        />
        <input type="text" id="image" value="image" placeholder="Image URL" />{" "}
        <br />
        <textarea name="description" id="description" rows="4" cols="50">
          A description of the movie
        </textarea>
        <select name="genres" id="genres">
          <option value="Adventure">Adventure</option>
          <option value="Animated">Animated</option>
          <option value="Biographical">Biographical</option>
          <option value="Comedy">Comedy</option>
          <option value="Disaster">Disaster</option>
          <option value="Drama">Drama</option>
          <option value="Epic">Epic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Romantic">Romantic</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Space-Opera">Space-Opera</option>
          <option value="Superhero">Superhero</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddMovie;
