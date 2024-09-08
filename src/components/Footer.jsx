import instagram from "../assets/instagram.png"
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png";
import {Link} from "react-router-dom";

function Footer() {
    return ( 
        <div className="footer-wrapper">
            <div className="footer">
                <div className='footer-left'>
                    <h2 className="footer-heading">BookMyCollab</h2>
                    <p className="footer-sub-heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam corrupti, sint impedit id necessitatibus numquam.</p>
                    <div className='footer-social'>
                        <img src={instagram} alt="instagram" className='footer-logos' />
                        <img src={linkedin} alt="linkedin" className='footer-logos' />
                        <img src={twitter} alt="twitter" className='footer-logos' />
                        <img src={gmail} alt="gmail" className='footer-logos' />
                    </div>
                </div>
                <div className='footer-center'>
                    <h2 className="footer-heading">Company</h2>
                    <Link>About</Link>
                    <Link>Career</Link>
                    <Link>Term & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Refund Policy</Link>
                </div>
                <div className='footer-right'>
                    <h2 className="footer-heading">Join us</h2>
                    <Link>Join as a brand</Link>
                    <Link>Join as a creator</Link>
                    <Link>Find creator</Link>
                </div>
            </div>
        </div>
     );
}

export default Footer;