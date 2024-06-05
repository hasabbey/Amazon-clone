import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {img} from './Data.jsx';
import classes from './Carousel.module.css';

function CarouselEffect() {
  return (<div>
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    interval={3000}
    stopOnHover={true}
    
    
   
   
    >
      {img.map((item, index) => (
        <div key={index}>
          <img className={classes.banner_img} src={item} />
        </div>
      ))}
    </Carousel>
    <div className={classes.hero_img}></div>
  </div>
      );
    }
    
    export default CarouselEffect;
