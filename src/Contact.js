import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <section className="address-section">
                <h2>Contact Address</h2>
                <p>H#52 A, Street#3, Asim Town, Harbanspura Lahore</p>
            </section>
            <section className="map-section">
                <h2>Location on Map</h2>
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
        </div>
    );
};

export default Contact;
