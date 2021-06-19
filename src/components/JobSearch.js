import React from 'react'

const JobSearch = () => {
    return (
        <div>
            <div className="job-filter">
                <button className="section-filter">
                    find a job
                </button>
                <button className="section-filter resume">
                    find resume
                </button>
                <form onClick={(e) => {e.preventDefault()}}>
                    <div className="job">
                        <label htmlFor="job-title">job</label>
                        <input type="search" className="job-input" id="job-title" placeholder="Job title, Keywords"/>
                    </div>
                    <div className="location">
                        <label htmlFor="job-location">location</label>
                        <input type="search" className="job-input location" id="job-location" placeholder="City, provine or region" />
                    </div>
                    <div className="job-select">
                        <label htmlFor="category">category</label>
                        <select value="industry" className="job-input">
                            <option value="temporary">temporary</option>
                            <option value="part time">part time</option>
                            <option value="full time">full time</option>
                            <option value="freelance">freelance</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn-search">search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobSearch;
