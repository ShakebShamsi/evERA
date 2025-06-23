import "./Explore.css"

const Explore = () => {
   return (
      <section className="explore-section">
         <h2 className="explore-title">Explore Our Electric Range</h2>
         <p className="explore-subtitle">Precision. Power. Performance. Discover what makes evERA the future of mobility.</p>

         <div className="vehicle-grid">
            <div className="vehicle-card">
               <img src="https://th.bing.com/th/id/OIP.LZF8Em-vsDtEHWM921TNQAHaE8?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="evERA X" className="vehicle-img" />
               <h3>evERA X</h3>
               <p>Luxury SUV with all-wheel drive, 500km range, and panoramic sunroof.</p>
            </div>
            <div className="vehicle-card">
               <img src="https://www.carscoops.com/wp-content/uploads/2023/04/New-Jaguar-EV-GT-Sedan-8-Carscoops.jpg" alt="evERA S" className="vehicle-img" />
               <h3>evERA S</h3>
               <p>Sleek sedan with autonomous navigation and premium leather interiors.</p>
            </div>
            <div className="vehicle-card">
               <img src="https://th.bing.com/th/id/OIP.JEblbABGEJ29E6CF2xHnOwHaEK?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="evERA E" className="vehicle-img" />
               <h3>evERA E</h3>
               <p>Compact electric hatchback with fast charging and sporty handling.</p>
            </div>
         </div>

         <div className="spec-highlight">
            <h3>Why Choose evERA?</h3>
            <ul className="tech-list ">
               <div style={{display:"flex"}}>
                  <li className="vehicle-card">⚡ Up to 500km Range on a Single Charge</li>
                  <li className="vehicle-card">🔋 80% Charge in Just 25 Minutes</li>
               </div>
               <div style={{ display: "flex" }}>
                  <li className="vehicle-card">🚘 Level 3 Autonomous Driving</li>
                  <li className="vehicle-card">🛡️ 360° AI-Powered Safety Monitoring</li>
               </div>
               <li className="vehicle-card" style={{placeItems:'center'}}>🌱 Built with Recycled & Sustainable Materials</li>
            </ul>
         </div>

         <div className="explore-cta">
            <h4>Ready to electrify your journey?</h4>
            <button className="primary-btn">Schedule a Test Drive</button>
            <button className="secondary-btn">Compare Models</button>
         </div>
      </section>
   )
}

export default Explore
