import React, { useState } from 'react';
import Slider from 'react-slick';
import Pager from '../Pager';
import './Gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Импортируем изображения напрямую
import image1 from '/images/image1.jpg';
import image2 from '/images/image2.jpg';
import image3 from '/images/image3.jpg';
import image4 from '/images/image4.jpg';
import image5 from '/images/image5.jpg';
import image6 from '/images/image6.jpg';
import image7 from '/images/image7.jpg';
import image8 from '/images/image8.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Используем импортированные изображения
  const images = [
    image1,
    image2, 
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const totalSlides = images.length;
  const currentPage = currentSlide + 1;

  return (
    <div className="gallery">
      <div className="gallery-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img 
                src={image} 
                alt={`Изображение ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      
      <Pager 
        currentPage={currentPage}
        totalPages={totalSlides}
      />
    </div>
  );
};

export default Gallery;