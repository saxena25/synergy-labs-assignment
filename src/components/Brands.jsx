import spotify from "../assets/spotify.png";
import google from "../assets/google.png"
import grab from "../assets/grab.png"
import medium from "../assets/medium.png"
import microsoft from "../assets/microsoft.png"
import stripe from "../assets/stripe.png"
import uber from '../assets/uber.png'
import youtube from "../assets/youtube.png"
import zoom from "../assets/zoom.png"

function Brands() {
    return ( 
        <div className='brands-main-wrapper'>
            <div className='brands-wrapper'>
                <div className="brands-top-box">
                    <h1 className='brands-heading'>Associated Brands</h1>
                    <p className='brands-dub-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam.</p>
                </div>
                <div className="brands-bottom-box">
                    <div className="brands-logo-top">
                        <img src={spotify} alt="spotify" className='logo' />
                        <img src={google} alt="google" className='logo' />
                        <img src={stripe} alt="stripe" className='logo' />
                        <img src={youtube} alt="youtube" className='logo' />
                        <img src={microsoft} alt="microsoft" className='logo' />
                    </div>
                    <div className="brands-logo-bottom">
                        <img src={medium} alt="medium" className='logo' />
                        <img src={zoom} alt="zoom" className='logo' />
                        <img src={uber} alt="uber" className='logo' />
                        <img src={grab} alt="grab" className='logo grab' />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Brands;