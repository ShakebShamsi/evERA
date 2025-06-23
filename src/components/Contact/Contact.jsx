import './Contact.css';

const Contact = () => {
   return (
      <section className="contact-section">
         <h2 className="contact-title">Get in Touch with evERA</h2>
         <p className="contact-subtitle">Have questions, partnership ideas, or need support? We'd love to hear from you within 24 hours.</p>

         <div className="contact-container">
            <form className="contact-form">
               <input type="text" placeholder="Your Name" required />
               <input type="email" placeholder="Your Email" required />
               <input type="text" placeholder="Subject" />
               <select>
                  <option value="">Choose Category</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Customer Support</option>
               </select>
               <textarea rows="6" placeholder="Your Message" required></textarea>
               <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
               <h4>Corporate Office</h4>
               <p>evERA Mobility Pvt. Ltd.<br />Indiranagar, Bengaluru.</p>

               <h4>Email & Phone</h4>
               <p>support@evera.com<br />+91 98765 43210</p>

               <h4>Schedule a Demo</h4>
               <p>
                  <a href="https://calendly.com/evera-demo" target="_blank" rel="noopener noreferrer">
                     Book a Test Drive via Calendly
                  </a>
               </p>

               <h4>WhatsApp Support</h4>
               <p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                     Chat on WhatsApp
                  </a>
               </p>

               <div style={{ border: '1px solid #ff5858', padding: '7px', borderRadius: '7px', placeItems: 'center' }}>
                  <h4>Follow Us</h4>
                  <div className="social-links">
                     <a href="#">LinkedIn</a>
                     {"|"}
                     <a href="#">Twitter</a>
                     {"|"}
                     <a href="#">Instagram</a>
                  </div>
               </div>
            </div>
         </div>

         <div className="map-container">
            {/* <iframe
               title="evERA HQ Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.088606636681!2d73.85674281531636!3d18.520430387398196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0897f6d3f31%3A0x3a017c147ca7e95c!2sBangalore%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1662458195917!5m2!1sen!2sin"
               
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.864299005414!2d77.6013025015686!3d12.972936649336942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a418770391%3A0xb50f46b826501036!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1750600267581!5m2!1sen!2sin" width="100%"
               height="300"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"></iframe>
         </div>
      </section>
   );
};

export default Contact;
