import './App.css';
import HomeMenu from './HomeMenu'; // Import your Home menu component
import ProjectsMenu from './ProjectsMenu'; // Import your Projects menu component
import TechnologiesMenu from './TechnologiesMenu'; // Import your Technologies menu component
import ContactMenu from './ContactMenu'; // Import your Contact menu component
import ServicesMenu from './ServicesMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" exact element={<HomeMenu />} />
              <Route path="/contacts" element={<ContactMenu/>} />
              <Route path="/services" element={<ServicesMenu/>} />
              <Route path="/projects" element={<ProjectsMenu/>} />
              <Route path="/technologies" element={<TechnologiesMenu/>} />

          </Routes>


      </Router>
  );
}

export default App;
