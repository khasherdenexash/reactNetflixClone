import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const FetchData = () => {
  const [movies, setMovies] = useState([]);

  const API_URL = "https://api.themoviedb.org/3/";
  const API_KEY = "bec5d40c4140a54e540e68f6318d4c83";

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    setMovies(results);
    console.log(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () => {
    movies.map((movie) => {
      <MovieCard key={movie?.id} movie={movie} />;
      console.log(movie?.original_title);
    });
  };

  return (
    <Box>
      <Typography variant="h1">MOVIES</Typography>
      <Box>{renderMovies()}</Box>
    </Box>
  );
};

export default FetchData;
