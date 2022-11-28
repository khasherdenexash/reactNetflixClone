import { Link } from "@mui/material";
import logo from "../assets/logo/Logonetflix.png";
import profile from "../assets/profile/profile.jpg";
import { Box, Button } from "@mui/material";
import {
  Search,
  NotificationsActive,
  ArrowDropDown,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        backgroundColor: "#000",
        height: "7vh",
      }}
    >
      {/* Left Section */}
      <Box sx={{ width: "55vw", display: "flex", justifyContent: "flex-end" }}>
        <Box
          sx={{
            display: "flex",
            height: "50px",
            alignItems: "center",
            width: "50vw",
            justifyContent: "space-evenly",
          }}
        >
          <Link href="/">
            <Box
              width="8vw"
              height="5vh"
              component="img"
              src={logo}
              alt="logo"
            />
          </Link>
          <Link underline="none" href="/">
            <Button sx={{ color: "#fff" }}>Home</Button>
          </Link>
          <Link underline="none" href="tvshows">
            <Button size="small" sx={{ color: "#fff" }}>
              Tv Shows
            </Button>
          </Link>
          <Link underline="none" href="movies">
            <Button size="small" sx={{ color: "#fff" }}>
              Movies
            </Button>
          </Link>
          <Link underline="none" href="latest">
            <Button size="small" sx={{ color: "#fff" }}>
              Latest
            </Button>
          </Link>
          <Link underline="none" href="mylist">
            <Button size="small" sx={{ color: "#fff" }}>
              My List
            </Button>
          </Link>
          <Link underline="none" href="browsebylanguage">
            <Button size="small" sx={{ color: "#fff" }}>
              Browse by Language
            </Button>
          </Link>
        </Box>
      </Box>
      {/* Right Section */}
      <Box
        sx={{
          width: "35vw",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "10vw",
            alignItems: "center",
          }}
        >
          <Search sx={{ color: "#fff" }} />
          <NotificationsActive sx={{ color: "#fff" }} />
          <Box
            width="37px"
            height="37px"
            component="img"
            src={profile}
            alt="logo"
          />
          <ArrowDropDown sx={{ color: "#fff" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
