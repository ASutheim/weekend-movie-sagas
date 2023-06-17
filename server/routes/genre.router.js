const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  // Add query to get all genres
  const movieToGet = req.body.id;
  const queryText = `
 SELECT "genres"."name" FROM genres
  JOIN movies_genres on genres.id = movies_genres.genre_id
  JOIN movies on movies.id  = movies_genres.movie_id
  WHERE movies.id = ${movieToGet}`;

  pool
    .query(queryText)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error getting genres from database", error);
      res.sendStatus(500);
    });
});

module.exports = router;
