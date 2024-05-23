// eslint-disable-next-line no-unused-vars
import React from "react";

export default function LandingPageMain() {
  return (
    <>
      <main>
        <section id="section1" className="page-section">
          <div className="hero-content">
            <div className="heroic-container">
              <h1>Visualize Your Investments Effortlessly</h1>
              <p>
                Track, manage, and optimize your investment portfolio with
                intuitive charts and graphs.
              </p>
              <div className="cta-buttons">
                <a href="#signup" id="Signup-button" className="cta-button">
                  Get Started for Free
                </a>
                <a
                  href="#learn-more"
                  id="learn-more-button"
                  className="cta-button"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* <div className="hero-image">
                <img src="hero-image.png" alt="Investment dashboard screenshot">
            </div> */}
          </div>
        </section>

        <section id="section2" className="page-section">
          <div className="hero-content">
            <div className="heroic-container">
              <h1>Key-Features</h1>
              <ul className="key-features">
                <h2>
                  <li>📈 Real-time Updates</li>
                  <li>📊 Comprehensive Analytics</li>
                  <li>🔒 Secure Data Handling</li>
                </h2>
              </ul>
            </div>
          </div>
        </section>

        <section id="section3" className="page-section">
          <h2>Contact Us</h2>
          <p>
            Contact information and call-to-action for visitors to get in touch.
          </p>
        </section>
      </main>
    </>
  );
}
