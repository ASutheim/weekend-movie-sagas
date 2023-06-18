import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";
// import AddMovie from "../AddMovie/AddMovie";
// import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
      <h1>MovieList</h1>
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
                  <Card sx={{ width: 220, height: 300 }}>
                    <CardActionArea>
                      <div key={movie.id} onClick={() => handleClick(movie.id)}>
                        <center><CardMedia
                          sx={{ height: 140, width: 140 }}
                          image={movie.poster}
                          alt={movie.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                          </Typography>
                        </CardContent></center>
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
