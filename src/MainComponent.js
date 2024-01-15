import React from 'react';
import './MainComponent.css'; // Import your CSS file

const MainComponent = () => {
    return (
        <div className="main-container">
            <div className="icon-div">
                <i className="fa-solid fa-code"></i>
                <p>Keep your code well organised in a source code management system</p>
            </div>
            <div className="icon-div">
                <i className="fa-brands fa-jenkins"></i>
                <p>Build and test your code with a variety of language support</p>
            </div>
            <div className="icon-div">
                <i className="fa-solid fa-list-check"></i>
                <p>Deploy your application on cloud or on-premises on a suitable stack</p>
            </div>
            <div className="icon-div">
                <i className="fa-brands fa-watchman-monitoring"></i>
                <p>Monitor and troubleshoot with monitoring tools</p>
            </div>
        </div>
    );
};

export default MainComponent;
