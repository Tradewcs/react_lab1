import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer has-background-dark has-text-light">
      <div className="content has-text-centered">
        <p className="title is-5">Follow Us</p>
        <div className="columns is-centered">
          <div className="column is-narrow">
            <a href="https://www.facebook.com" target="_blank" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://www.twitter.com" target="_blank" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://www.instagram.com" target="_blank" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="column is-narrow">
            <a href="https://www.youtube.com" target="_blank" className="icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
