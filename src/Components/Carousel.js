import React from 'react';
import Slider from 'react-slick';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Carousel() {
  return (
    <div className="my-8 mx-auto max-w-4xl">
      <Slider {...carouselSettings}>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full rounded-lg" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full rounded-lg" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full rounded-lg" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default Carousel;
