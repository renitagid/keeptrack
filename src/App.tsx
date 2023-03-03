import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./about/AboutUs";
import Header from "./home/Header";

import "./App.css";
import HomePage from "./home/HomePage";
import ProjectPage from "./projects/ProjectPage";
import ProjectsPage from "./projects/ProjectsPage";
import { store } from "./state";
import { Box, createTheme, styled, ThemeProvider } from "@mui/material";
import LocationsPage from "./locations/LocationsPage";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  //function to handle dark mode
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //Main container to handle over arching styling
  const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    fontFamily: "Jost, sans-serif",
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "#1a1a1a" : "white",
    overflow: "auto",
  });

  const theme = createTheme({
    typography: {
      fontFamily: 'Jost, sans-serif',
    }, palette: {
      mode: darkMode ? "dark" : "light",
      
    }
  })
  return (
    <Provider store={store}>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Jost, sans-serif",
            height: "100vh",
            backgroundColor: "#203966",
          }}
        >
          <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
          <MainContainer> 
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
          </ThemeProvider>
          </MainContainer>
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
