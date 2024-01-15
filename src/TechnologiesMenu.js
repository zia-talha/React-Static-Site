import Header from './Header';
import React from "react";
import './TechnologiesMenu.css';
import Footer from "./Footer";
const TechnologiesMenu = () => {
    return (
        <div>
            <Header />
            <div className="services-menu">
                <div className="cicd-tools-header">
                    <h1>CI/CD tools that we use!</h1>
                </div>
                <div className="cicd-tools-container">
                    {/* AWS Cloud Services */}
                    <div className="cicd-tools">
                        <i className="fa-solid fa-code-branch"></i>
                        <h2>Github Actions</h2>
                        Yaml based webhooks for github pipelines
                    </div>
                    <div className="cicd-tools">
                        <i className="fa-solid fa-code-branch"></i>
                        <h2>Jenkins</h2>
                        Free and open source tool for extensive support of tech stack
                    </div>
                    <div className="cicd-tools">
                        <i className="fa-solid fa-code-branch"></i>
                        <h2>Puppet</h2>
                        Configuration automation tool
                    </div>
                    <div className="cicd-tools">
                        <i className="fa-solid fa-code-branch"></i>
                        <h2>Docker</h2>
                        Popular platform for containerization
                    </div>
                    <div className="cicd-tools">
                        <i className="fa-solid fa-code-branch"></i>
                        <h2>Nexus</h2>
                        Free and open-source artifactory for Nuget and Container packages
                    </div>
                    <div className="cicd-tools">
                        <i className="fa-solid fa-code-branch"></i>
                        <h2>Zabbix</h2>
                        Free and open-source tool for monitoring
                    </div>


                </div>
                <div className="aws-tools-header">
                    <h1>AWS services that we use!</h1>
                </div>
                <div className="aws-tools-container">
                    {/* AWS Cloud Services */}
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>CodeCommit</h2>
                        AWS Source code repository
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>EC2</h2>
                        Scalable Linux and Windows servers
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>RDS</h2>
                        MySQL, Oracle and AWS proprietary databases
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>S3</h2>
                        Simple storage service for storing files and hosting static webpages
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>Amplify</h2>
                        Build and host static and dynamic applications using Yaml based pipeline
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>Route53</h2>
                        AWS DNS service
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>Elasticache</h2>
                        In memory databases
                    </div>
                    <div className="aws-tools">
                        <i className="fa-brands fa-aws"></i>
                        <h2>SQS</h2>
                        AWS simple queuing server for LIFO AND FIFO
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}
export default TechnologiesMenu;