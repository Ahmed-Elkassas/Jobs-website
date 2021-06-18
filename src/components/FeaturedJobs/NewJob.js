import React, { useState } from 'react'
import newItem from './FeaturedJobsData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

const NewJob = () => {

    const [index, setIndex] = useState(0);
    const {id, img, title, company, text, location, about, jobType, time } = newItem[index];


    const checkNumber = (number) => {
    if (number > newItem.length - 1) {
      return 0;
    }
    if (number < 0) {
      return newItem.length - 1;
    }
    return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    };

    return (
        <div className="newjob-wrapper">
            <h3>Features Jobs</h3>
            <div className="container-newjobs">
                <section className="new-jobs" key={id}>
                    <div className="image">
                        <img src={img} alt={title} />
                    </div>
                    <h5 className={`${jobType === 'temporary' ? 'job-type' :
                                      jobType === 'internship' ? 'job-typeo' :
                                      jobType === 'part time' ? 'job-typey' :
                                      jobType === 'freelance' ? 'job-typeb' : null}`}>{jobType}</h5>
                    <div className="company-info">
                        <h3>{title}</h3>
                        <div>
                            <span>{company}</span>
                            <small>{about}</small>
                        </div>
                    </div>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                    <div className="time-sec">
                        <small className="location-icon"><ImLocation /></small>
                        <small className="location">{location}</small>
                        <small className="time-icon"><AiOutlineClockCircle /></small>
                        <small>{time}</small>
                    </div>
                    <div className="apply-sec">
                        <div className="buttons">
                            <button onClick={prevPerson}><FaChevronLeft /></button>
                            <button onClick={nextPerson}><FaChevronRight /></button>
                        </div>
                        <button type="submit">apply for this job</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NewJob;
