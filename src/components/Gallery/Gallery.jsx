import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Pager from '../Pager';
import './Gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Тестовые изображения - замените на свои
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg', 
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg'
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
  const currentPage = currentSlide + 1; // Теперь текущая страница = текущий слайд + 1

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
                onError={(e) => {
                  e.target.src = `https://picsum.photos/300/200?random=${index + 1}`;
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      
      <Pager 
        currentPage={currentPage}
        totalPages={totalSlides} // Теперь всегда 8 страниц
      />
    </div>
  );
};

export default Gallery;