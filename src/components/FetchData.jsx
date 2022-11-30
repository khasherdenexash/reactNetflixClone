import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const FetchData = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "bec5d40c4140a54e540e68f6318d4c83";

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    console.log(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Box>
        <Typography sx={{ marginLeft: "1vw", color: "#fff" }} variant="h3">
          Khash-Erdene Movie App
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "20vw",
            justifyContent: "space-between",
            marginLeft: "1vw",
          }}
          component="form"
          onSubmit={searchMovies}
        >
          <TextField
            variant="standard"
            sx={{
              height: "4vh",
              width: "12vw",
              backgroundColor: "#000",
              input: { color: "#fff", backgroundColor: "#000" },
            }}
            onChange={(e) => setSearchKey(e.target.value)}
            InputProps={{
              color: "primary",
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
          />
          <Button sx={{ height: "4vh" }} type="submit" variant="outlined">
            SUBMIT
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "scroll",
        }}
      >
        {movies.map((movie) => {
          return <MovieCard key={movie?.id} movie={movie} />;
        })}
      </Box>
    </Box>
  );
};

export default FetchData;
