import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";
import AddMovie from "../AddMovie/AddMovie";
// import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handleClick = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <main>
      {/* <AddMovie /> */}
      <div id="title">Movie List</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} rowSpacing={5}>
          {movies.map((movie) => {
            return (
              <Grid
                item
                xs={3}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Card sx={{ width: 220, height: 290 }}>
                  <CardActionArea>
                    <div key={movie.id} onClick={() => handleClick(movie.id)}>
                      <center>
                        <div id="image">
                        <CardMedia
                          sx={{ height: 140, width: 140 }}
                          image={movie.poster}
                          alt={movie.title}
                        /></div>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                          </Typography>
                        </CardContent>
                      </center>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </main>
  );
}

export default MovieList;
