import { Box } from "@mui/material";
import React from "react";
import Content from "./components/Content";
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <Box>
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <Navbar />
        <Content />
      </Box>
      <FetchData />
    </Box>
  );
};

export default Home;
