import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_THIS_MOVIE", fetchThisMovie);
  yield takeEvery("FETCH_THIS_GENRE", fetchThisGenre);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchThisMovie(id) {
  //getting data on a specific movie from the database
  console.log("Inside saga request for movie detail info", id.payload);
  try {
    const movie = yield axios.get(`/api/movie/${id.payload}`);
    console.log("Getting movie:", movie.data);
    yield put({ type: "SET_THIS_MOVIE", payload: movie.data[0] });
  } catch {
    console.log("Error getting detail info for movie");
  }
}

function* fetchThisGenre(id) {
  console.log("Inside saga request for movie genre", id.payload);
  try {
    const genre = yield axios.get(`/api/genre/${id.payload}`);
    yield put({ type: "SET_THIS_GENRE", payload: genre.data });
  } catch {
    console.log("error getting genre data for movie");
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const movieDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_THIS_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

const genreDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_THIS_GENRE":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetail,
    genreDetail,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
