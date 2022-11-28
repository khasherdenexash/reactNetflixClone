import { Box, Button, CardMedia, Typography } from "@mui/material";
import dnTrailer from "../assets/video/dnTrailer.mp4";
import { PlayArrow, Error } from "@mui/icons-material";
import { Stack } from "@mui/system";

const Content = () => {
  return (
    <Box sx={{ height: "93vh", width: "100vw" }}>
      <CardMedia
        sx={{
          height: "93vh",
          objectFit: "cover",
          position: "absolute",
        }}
        component="video"
        image={dnTrailer}
        autoPlay
        muted
        loop
      />
      <Box
        position="relative"
        sx={{
          width: "60vw",
          color: "#fff",
          top: "30vh",
          left: "7vw",
        }}
      >
        <Typography fontSize="60px">DEATH NOTE</Typography>
        <Typography width="50vw">
          A high school student discovers a supernatural notebook that has
          deadly powers. He can kill anyone he wishes simply by inscribing their
          name within its pages. Intoxicated with his new power, he begins to
          eliminate those he deems unworthy of life.
        </Typography>
        <Stack direction="row" spacing={1} marginTop="2vh">
          <Button
            sx={{
              width: "130px",
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
            startIcon={<PlayArrow />}
            variant="contained"
          >
            PLAY
          </Button>
          <Button
            sx={{
              backgroundColor: "grey",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
            startIcon={<Error />}
            variant="contained"
          >
            MORE INFO
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Content;
