import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AboutUs from "./about/AboutUs";
import Header from "./home/Header";

import "./App.css";
import HomePage from "./home/HomePage";
import ProjectPage from "./projects/ProjectPage";
import ProjectsPage from "./projects/ProjectsPage";
import { store } from "./state";
import { Box } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Jost, sans-serif",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
