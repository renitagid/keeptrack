import { Box, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

//type of HomePage does not need to be defined because it is a functional component that returns JSX.
function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: "url(assets/landingpage.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%, 100%",
        objectFit: "cover",
        height: "100vh",
        width: "100%",
        paddingTop: 10,
        textAlign: "center",
        position:"fixed",
        zIndex: "-1"
      }}
    >
      <h2
        style={{ fontSize: 100, color: "white", fontFamily: "Gloock, serif" }}
      >
        Clean California
      </h2>
      <p style={{ fontSize: 60, color: "white" }}>
        Park Beautification Projects
      </p>
      <NavLink to="/projects/" style={{ opacity: "80%" }}>
        View Projects
      </NavLink>
      <NavLink to="/about/" style={{ opacity: "80%" }}>
        About Clean CA
      </NavLink>
    </Box>
  );
}

export default HomePage;
