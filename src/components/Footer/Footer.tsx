import React from 'react';
import './Footer.css';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-content">
            <div className="footer-brand">
               <h3>evERA</h3>
               <p>Driving the future of electric mobility.</p>
            </div>

            <div className="footer-links">
               <h4>Quick Links</h4>
               <ul>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Test Drive</a></li>
               </ul>
            </div>

            <div className="footer-contact">
               <h4>Contact</h4>
               <p>support@evera.com</p>
               <p>+91 98XX5 84XX9 </p>
               <div className="footer-social">
                  <a href="#">LinkedIn</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
               </div>
            </div>
         </div>

         <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} evERA. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
