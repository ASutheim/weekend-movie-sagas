const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get(`/:id`, (req, res) => {
  const movieToGet = req.body.id;
  const query = `
 SELECT "genres"."name" FROM genres
  JOIN movies_genres on genres.id = movies_genres.genre_id
  JOIN movies on movies.id  = movies_genres.movie_id
  WHERE movies.id = ${movieToGet}`;
  console.log("Getting genre details from server:", movieToGet);
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
      console.log("GENRE DETAILS!", result.rows);
    })
    .catch((error) => {
      console.log("error getting genre details from database", error);
      res.sendStatus(500);
    });
});

module.exports = router;
