import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';
import HomePage from './home/HomePage';
import ProjectPage from './projects/ProjectPage';
import ProjectsPage from './projects/ProjectsPage';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{display:"flex", flexDirection:"column"}}>
        <header className="sticky" style={{paddingTop:6, paddingLeft:6, height:56}}>
          <NavLink to="/" className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/projects/" className="button rounded">
            Projects
          </NavLink>
        </header>
        <div className="container" style={{padding:0, margin:0, height:"90vh"}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
