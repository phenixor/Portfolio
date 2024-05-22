import React, { useState, useEffect } from 'react';
import slides from "../../Projets.json";

function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="slider">
            {slides.length > 1 && (
                <>
                    <button onClick={prevSlide} className="changer changer__prev">&#10094;</button>
                    <button onClick={nextSlide} className="changer changer__next">&#10095;</button>
                    <div className="slide-counter">
                        {currentSlide + 1} / {slides.length}
                    </div>
                </>
            )}
            <div className="slides">
                {slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <a href={slide.link} target="_blank" rel="noopener noreferrer">
                            <img className='slide__image' src={slide.image} alt={`Image ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
