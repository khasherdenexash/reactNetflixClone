import { Box } from "@mui/material";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  const movieInfo = () => {
    window.location = `https://www.2embed.to/embed/tmdb/movie?id=${movie.id}`;
  };
  return (
    <Box sx={{ marginLeft: "1vw" }}>
      <Box
        onClick={movieInfo}
        width="8vw"
        heigth="23vh"
        component="img"
        sx={{ cursor: "pointer" }}
        src={`${IMAGE_PATH}${movie?.poster_path}`}
      />
    </Box>
  );
};

export default MovieCard;
