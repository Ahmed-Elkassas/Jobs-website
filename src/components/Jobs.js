import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { AiOutlineClockCircle } from 'react-icons/ai';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Item-one', 'Item-two', 'Item-three'
];
const defaultOption = options[0];


const Jobs = ({items}) => {
    
    const [visible, setVisible] = useState(4);

    const loadMore = () => {
        setVisible(visible + 4);
    }

    return (
        <div className="container job-show">
            <div className="job-container">
                {items.slice(0, visible).map((jobItem) => {
                    const {id, title, company, slogan, img, location, time, jobType} = jobItem;
                    return (
                        <section key={id} className="job-item">
                            <div className="job-img">
                                <img src={img} alt='title' />
                            </div>
                            <div className="job-info">
                                <h4 className="job-title">{title}</h4>
                                <div>
                                    <h5 className="job-company">{company}</h5>
                                    <span className="job-slogan">{slogan}</span>
                                </div>
                            </div>
                            <div className="job-more-info">
                                <small className="location-icon"><ImLocation /></small>
                                <p className="job-loc">{location}</p>
                                <small className="time-icon"><AiOutlineClockCircle /></small>
                                <span className="job-time">{time}</span>
                                <div className={`${jobType === 'temporary' ? 'job-type' :
                                      jobType === 'internship' ? 'job-typeo' :
                                      jobType === 'part Time' ? 'job-typey' :
                                      jobType === 'Full Time' ? 'job-typef' :
                                      jobType === 'Freelance' ? 'job-typeb' : null}`}>{jobType}</div>
                            </div>
                        </section> 
                    )
                })}
                {visible > 3 && (
                    <div className="btn-load-div">
                        <button type="button" className="btn-load" onClick={loadMore}>load more listings</button>
                    </div>
                )}
            </div>

            {/* Start Search Section */}
            <div className="part-two">
                <div className="head-search">
                    <BsSearch className="search-icon"></BsSearch>
                    <h4>start search</h4>
                </div>
                <form onClick={(e) => {e.preventDefault()}}>
                    <div className="job">
                        <label htmlFor="job-title">job</label>
                        <input type="search" className="job-input" id="job-title"/>
                    </div>
                    <div className="location">
                        <label htmlFor="job-location">location</label>
                        <input type="search" className="job-input" id="job-location" />
                    </div>
                    <div className="job-select">
                        <label htmlFor="category">category</label>
                        <select value="industry" className="job-input" >
                            <option value="temporary">temporary</option>
                            <option value="part time">part time</option>
                            <option value="full time">full time</option>
                            <option value="freelance">freelance</option>
                        </select>
                    </div>
                </form>

                {/* contract section */}
                <div className="contaract">
                    <Dropdown options={options}  value={defaultOption} placeholder="Select an option" className="dropdown" />
                    <Dropdown options={options}  value={defaultOption} placeholder="Select an option"  className="dropdown"/>
                    <button type="submit"><BsSearch className="icon" />search</button>
                </div>
            </div>
        </div>
    )
}

export default Jobs;
