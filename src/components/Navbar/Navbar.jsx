import './Navbar.css'

const Navbar = ({ scrollToSection, homeRef, exploreRef, aboutRef, contactRef }) => {
   return (
      <div className='nav'>
         <div className="nav-logo">evERA</div>
         <ul className="nav-menu">
            <li className='nav-li' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
            <li className='nav-li' onClick={() => scrollToSection(exploreRef)}>Explore</li>
            <li className='nav-li' onClick={() => scrollToSection(aboutRef)}>About</li>
            <li className="nav-contact" onClick={() => scrollToSection(contactRef)}>Contact</li>
         </ul>
      </div>
   )
}

export default Navbar
