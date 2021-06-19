import React, { useState } from 'react';
import candidates from './SliderData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const CarouselSlider = () => {


    const [visible, setVisible] = useState(6);

    const loadMore = () => {
        if (visible <= 6) {
            candidates.shift();
            let visible = 5
            setVisible(visible + 1);

        }else {
            setVisible(visible - 1);
        }
    }


    return (
        <div className="slider-wrapper">
            <div className="slider">
                <div className="conatiner">
                    <span>find top talents</span>
                    <h2>explore our latest candidates</h2>
                    <div className="underline"></div>
                    <p className="paragraph-slider">Work with someone perfect for your team &amp; get amazing results working with the best employees, hire talents with confidence!</p>
                </div>
            </div>
            <div className="container">
                <button type="button" className="btn-left"><FaChevronLeft  className="icon"/></button>
                <section className="slider-container">
                    {candidates.slice(0, visible).map((candidate) => {
                        return (
                            <div className="carousel" key={candidate.id}>
                                <div className="image">
                                    <img src={candidate.image} alt="candidate" />
                                </div>
                                <p>{candidate.address}</p>
                                <h5>{candidate.name}</h5>
                                <small>{candidate.job}</small>
                            </div>
                        )
                    })}
                </section>
                <button type="button" className="btn-right" onClick={loadMore} ><FaChevronRight className="icon" /></button>
            </div> 
        </div>
        
    )
}

export default CarouselSlider;
