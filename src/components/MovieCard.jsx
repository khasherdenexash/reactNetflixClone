import { Box, Typography } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Box>
      <Typography>{movie?.original_title}</Typography>
    </Box>
  );
};

export default MovieCard;
