import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube-icon.png";
import facebook from "../assets/favebook-icon.png";

function Creator() {
    return ( 
        <div className="creator-wrapper">
            <div className='creator'>
                <div className="creator-top-box">
                    <div className="top-box-left">
                        <h2 className='creator-heading'>The OG Creators</h2>
                        <p className='creator-sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="top-box-right">
                        <button className="view-all-btn">View All</button>
                    </div>
                </div>
                <div className='wrapper-creator'>
                    <div className='cards'>
                        <img className='profile-photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnrpPeu0aMIKC3ZWfV8EYwxRRjE2dS52C9Q&s" alt="" />
                        <div className='cards-info-top'>
                            <p className='creator-names'><b>Tanmay Bhatt</b></p>
                            <p className='creator-names'>1.9M</p>
                        </div>
                        <div className='cards-info-bottom'>
                            <p>tanmaybhat</p>
                            <p>Followers</p>
                        </div>
                        <div className='divider'></div>
                        <div className='cards-social-handle'>
                            <div className='social-handles'>
                                <img src={instagram} alt="instagram-reel"/>
                                <img src={youtube} alt="youtube-play"/>
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <button className='compare-btn'>Compare</button>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='profile-photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmnDfW3tWHpyri4_FMF3C2KMyreN5IezvjQ&s" alt="" />
                        <div className='cards-info-top'>
                            <p className='creator-names'><b>Kusha Kaplia</b></p>
                            <p className='creator-names'>3.7M</p>
                        </div>
                        <div className='cards-info-bottom'>
                            <p>kushakaplia</p>
                            <p>Followers</p>
                        </div>
                        <div className='divider'></div>
                        <div className='cards-social-handle'>
                            <div className='social-handles'>
                                <img src={instagram} alt="instagram-reel"/>
                                <img src={youtube} alt="youtube-play"/>
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <button className='compare-btn'>Compare</button>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='profile-photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWGZ4DTn3lK5Fr9TGqxw-2Us-0ihxXWluKA&s" alt="" />
                        <div className='cards-info-top'>
                            <p className='creator-names'><b>Rohan Joshi</b></p>
                            <p className='creator-names'>597K</p>
                        </div>
                        <div className='cards-info-bottom'>
                            <p>mojorojo</p>
                            <p>Followers</p>
                        </div>
                        <div className='divider'></div>
                        <div className='cards-social-handle'>
                            <div className='social-handles'>
                                <img src={instagram} alt="instagram-reel"/>
                                <img src={youtube} alt="youtube-play"/>
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <button className='compare-btn'>Compare</button>
                        </div>
                    </div>
                    <div className='cards'>
                        <img className='profile-photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLOM0rw74XgfV9ZD2V61NwQAhhbBZ1XTA4A&s" alt="" />
                        <div className='cards-info-top'>
                            <p className='creator-names'><b>Bhuvan Bam</b></p>
                            <p className='creator-names'>19.4M</p>
                        </div>
                        <div className='cards-info-bottom'>
                            <p>bhuvan.bam22</p>
                            <p>Followers</p>
                        </div>
                        <div className='divider'></div>
                        <div className='cards-social-handle'>
                            <div className='social-handles'>
                                <img src={instagram} alt="instagram-reel"/>
                                <img src={youtube} alt="youtube-play"/>
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <button className='compare-btn'>Compare</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Creator;