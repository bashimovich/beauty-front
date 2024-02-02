import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './../Components/components.css'


function ServiceDetailImage(props) {
  const carouselStyles = {
    width: '100%',
    maxHeight: '600px',
    // borderRadius: '20px',
  };

  return (
    <div style={carouselStyles}>
      <Carousel autoPlay={true} infiniteLoop showStatus={false} showThumbs={false} interval={5000}>
        {props.web_images.map((img) => {return (
        <div>
          <img style={{borderRadius:'20px', width:'100%', maxHeight:'600px' }} src={img.src} alt="Image 1" />
        </div>
        )})}
      </Carousel>
    </div>
  );
}

export default ServiceDetailImage;