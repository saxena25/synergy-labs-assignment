import homePhoto from "../assets/homePhoto.png";
import Button from 'react-bootstrap/Button';
import { Select } from '@chakra-ui/react';

function Home() {
    return ( 
        <div className="home-wrapper">
            <div className="home">
                <div className="home-left-box">
                    <img width="48" height="48" src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="waving-hand-emoji"/>
                    <h2 className="home-heading">Simplifying Influencer Marketing For You!</h2>
                    <p>Explore creators across YouTube, Instagram & 
                    Facebook to curate unique content for your brand</p>
                    <div className="home-left-dropdown"> 
                        <Select placeholder='Social Media' bg='white' color='black' >
                            <option value='option1'>Instagram</option>
                            <option value='option2'>FaceBook</option>
                            <option value='option3'>Snapchat</option>
                            <option value='option3'>Youtube</option>
                        </Select>
                        <Select placeholder='Select Category' bg='white' color='black'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Button variant="primary">Search</Button>
                    </div>
                </div>
                <div className="home-right-box">
                    <img src={homePhoto} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Home;