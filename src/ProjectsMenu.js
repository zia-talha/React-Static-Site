import Header from './Header';
import React from "react";
import './ProjectsMenu.css';
import Footer from "./Footer";
const ProjectsMenu = () => {
    return (
        <div>
            <Header />
            <div className="projects-menu">
                <div className="projects-header">
                    <h1>My Projects</h1>
                </div>
                <div className="project-container">
                    {/* AWS Cloud Services */}
                    <div className="project">
                        <a href="https://cyberpip.com" target="_blank" rel="noopener noreferrer" className="proj1">
                            Cyberpip.com
                        </a>
                    </div>
                    <div className="project">Work in progress...</div>
                    <div className="project">Work in progress...</div>
                    <div className="project">Work in progress...</div>
                    <div className="project">Work in progress...</div>
                    <div className="project">Work in progress...</div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ProjectsMenu;