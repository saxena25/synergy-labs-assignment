import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <div className='navbar-wrapper'>
            <div className='navbar'>
                <div className='left-box-navbar'><b>BookMyCollab</b></div>
                <div className='right-box-navbar'>
                    <Link className='navbar-link'>What We Do</Link>
                    <Link className='navbar-link'>How it Works</Link>
                    <Link className='navbar-link'>Join Us As Brand</Link>
                    <Link className='navbar-link'>Join Us As Creator</Link>
                    <button className='login-btn'>Login</button>
                </div>
            </div>
        </div>
     );
}

export default Navbar;