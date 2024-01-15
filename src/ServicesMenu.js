import Header from './Header';
import React from "react";
import './ServicesMenu.css';
import Footer from "./Footer";
const ServicesMenu = () => {
    return (
        <div>
            <Header />
            <div className="services-menu">
                <div className="aws-feedback-header">
                    <h1>AWS Services</h1>
                </div>
                <div className="aws-service-container">
                    {/* AWS Cloud Services */}
                    <div className="aws-service">State of the art infrastructure design and analysis!</div>
                    <div className="aws-service">Fully customized access!</div>
                    <div className="aws-service">Ensuring high availability for your application and services!</div>
                    <div className="aws-service">Implementing security best practices to save you from the cruel world!</div>
                    <div className="aws-service">While making you 100% satisfied, yet with low cost!</div>
                    <div className="aws-service">Choosing AWS for you, Serving perfect for you!</div>

                </div>
                <div className="cicd-feedback-header">
                    <h1>CD/CD Services</h1>
                </div>
                <div className="cicd-service-container">
                    {/* CI/CD Services */}
                    <div className="cicd-service">Choosing the best optimized CI/CD implementation!</div>
                    <div className="cicd-service">Giving you seamless operations experience!</div>
                    <div className="cicd-service">Enforce your custom CI/CD stacks!</div>
                    <div className="cicd-service">Get alerts for your intended change!</div>
                    <div className="cicd-service">Leave the complete infrastructure platform on us</div>
                    <div className="cicd-service">Monitor everything going on!</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ServicesMenu;