import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="pastki-qism">
      <div className="obuna-bolimi">
        <p className="kichik-matn">DON'T MISS ANYTHING</p>
        <h2 className="obuna-sarlavha">Subscribe to the Createx School announcements</h2>
        <div className="obuna-formasi">
          <input type="email" placeholder="Your working email" className="email-input" />
          <button className="obuna-tugma">Subscribe</button>
        </div>
      </div>

      <div className="asosiy-footer">
        <div className="footer-konteyner">
          <div className="footer-ustun">
            <h3 className="footer-logo">CREATEX</h3>
            <p className="footer-tavsif">
              Createx Online School is a leader in online education. 
              We offer lots of courses and programs from the main market experts.
            </p>
            <div className="ijtimoiy-tarmoqlar">
              <span>f</span> <span>t</span> <span>y</span> <span>in</span>
            </div>
          </div>

          <div className="footer-ustun">
            <h4>SITE MAP</h4>
            <ul>
              <li>About Us</li>
              <li>Courses</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="footer-ustun">
            <h4>COURSES</h4>
            <ul>
              <li>Marketing</li>
              <li>Management</li>
              <li>HR & Recruiting</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>

          <div className="footer-ustun">
            <h4>CONTACT US</h4>
            <p>(405) 555-0128</p>
            <p>hello@createx.com</p>
          </div>

          <div className="footer-ustun">
            <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <div className="mini-obuna">
              <input type="text" placeholder="Email address" />
              <button>→</button>
            </div>
            <p className="kichik-izoh">*Subscribe to our newsletter to receive communications and early updates from Createx Edit.</p>
          </div>
        </div>
      </div>

      <div className="footer-pastki-chiziq">
        <div className="footer-konteyner">
          <p>© All rights reserved. Made with love by Createx Studio</p>
          <button className="tepaga-tugma">GO TO TOP</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;