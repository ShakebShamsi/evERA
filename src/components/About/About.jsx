import './About.css'
const About = () => {
   return (
      <section className="about-section">
         <h2 className="about-title">Driven by Purpose. Powered by Innovation.</h2>

         <p className="about-intro">
            At evERA, we're not just designing electric vehicles. We're crafting a future where mobility is sustainable, intelligent, and emotionally captivating.
         </p>

         <div className="about-blocks">
            <div className="about-card">
               <h3>🚗 Our Journey</h3>
               <p>Founded in 2022 with a bold vision to electrify the Indian subcontinent, evERA grew from a garage prototype to a nationally acclaimed EV manufacturer in just 3 years.</p>
            </div>

            <div className="about-card">
               <h3>🌱 Sustainability First</h3>
               <p>100% of our vehicles are made with recyclable materials, zero tailpipe emissions, and a carbon-neutral production facility.</p>
            </div>

            <div className="about-card">
               <h3>⚙️ Innovation DNA</h3>
               <p>With in-house R&D labs, we lead in battery tech, AI-based navigation, and regenerative braking systems.</p>
            </div>
         </div>

         <div className="about-stats">
            <div className="stat-item">
               <h4>25,000+</h4>
               <p>Vehicles Delivered</p>
            </div>
            <div className="stat-item">
               <h4>85%</h4>
               <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
               <h4>120+</h4>
               <p>Charging Stations Partnered</p>
            </div>
         </div>

         <div className="about-cta">
            <h4>evERA isn’t just an EV company — it’s a promise for generations to come.</h4>
            <button className="primary-btn">Watch Our Story</button>
         </div>
      </section>
   );
};

export default About;
 
