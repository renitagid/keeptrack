import { Box, Button } from "@mui/material";
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
        height: "100%",
        width: "100%",
        paddingTop: 6,
        textAlign: "center",
        position: "fixed",
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

      <Button
        component={NavLink}
        to="/projects/"
        variant="contained"
        sx={{ margin: 3 }}
      >
        View Projects
      </Button>

      <Button
        component={NavLink}
        to="/about/"
        variant="contained"
        sx={{ margin: 3 }}
      >
        About Clean CA
      </Button>
    </Box>
  );
}

export default HomePage;
