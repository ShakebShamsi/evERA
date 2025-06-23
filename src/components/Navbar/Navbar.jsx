import './Navbar.css'

const Navbar = () => {
   return (
      <div className='nav'>
         <div className="nav-logo">evERA</div>
         <ul className="nav-menu">
            <li className='nav-li'>Home</li>
            <li className='nav-li'>Explore</li>
            <li className='nav-li'>About</li>
            <li className="nav-contact">Contact</li>
         </ul>
      </div>
   )
}

export default Navbar
