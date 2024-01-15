import React, { useState } from 'react';
import './ContactMenu.css';
import Header from "./Header";
import Footer from "./Footer";
const ContactMenu = () => {
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, for example, sending feedback to a server
        // You can access fullName, message, and email states to send the feedback data
        console.log('Feedback submitted:', { fullName, message, email });
    };
    return (
        <div className="contact-container">
            <div>
                <Header />
            </div>
            <section className="map-section">
                {/* Google Maps iframe with embedded address */}
                <iframe
                    title="Google Maps"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=H%2352%20A%2C%20Street%233%2C%20Asim%20Town%2C%20Harbanspura%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </section>
            <div className="feedback-header">
                <h1>Give us feedback</h1>
            </div>
            <div className="form-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ContactMenu;
