import React from 'react'
import { BsBuilding, BsBook, BsFillCursorFill, BsClipboardData } from 'react-icons/bs';
import { RiHeartPulseLine } from 'react-icons/ri';
import { FaTwitter, FaEnvelope, FaCarSide, FaRegKeyboard } from 'react-icons/fa';
import NewJob from './FeaturedJobs/NewJob';


const JobCount = () => {
    return (
        <div className="container jobCount">
            <div className="sec-left">
                <div className="count-item">
                    <BsBuilding className="icon-count"></BsBuilding>
                    <div>
                        <h4>Construction &amp; Build</h4>
                        <span className="job-num">7 open positions</span>
                    </div>
                </div>
                <div className="count-item">
                    <BsBook className="icon-count"></BsBook>
                    <div>
                        <h4>Education &amp; Training</h4>
                        <span className="job-num">32 open positions</span>
                    </div>
                </div>
                <div className="count-item">
                    <BsClipboardData className="icon-count"></BsClipboardData>
                    <div>
                        <h4>Acounting &amp; Fiance</h4>
                        <span className="job-num">0 open positions</span>
                    </div>
                </div>
                <div className="count-item">
                    <RiHeartPulseLine className="icon-count"></RiHeartPulseLine>
                    <div>
                        <h4>Healthcare &amp; Beauty</h4>
                        <span className="job-num">2 open positions</span> 
                    </div>
                </div>
                <div className="count-item">
                    <FaCarSide className="icon-count"></FaCarSide>
                    <div>
                        <h4>Cars &amp; Automotive</h4>
                        <span className="job-num">9 open positions</span>
                    </div>
                </div>
                <div className="count-item">
                    <FaRegKeyboard className="icon-count"></FaRegKeyboard>
                    <div>
                        <h4>Web Development</h4>
                        <span className="job-num">8 open positions</span>
                    </div>
                </div>
            </div>
             <div className="sec-right">
                <NewJob />
            </div>
            <div className="social-sec news">
                <div className="head">
                    <BsFillCursorFill className="social-icon"></BsFillCursorFill>
                    <h3>Subscribe Our News</h3>
                </div>
                <div className="info">
                    <p>Subscrbe to our newsletter to get the latest jobs posted, candidates, and latest news.</p>
                    <input  type="email" placeholder={`Enter Your Email`} />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
            <div className="social-sec twitter">
                <div className="head">
                    <FaTwitter className="social-icon"></FaTwitter>
                    <h3>Latest Tweets</h3>
                </div>
                <div className="info">
                    <span className="acount">@tielabs</span>
                    <p>we have released a major update for instaNOW plugin form have released a major update for instaNOW plugin</p>
                    <h6>8 hours</h6>
                </div>
            </div>
        </div>
    )
}

export default JobCount;
