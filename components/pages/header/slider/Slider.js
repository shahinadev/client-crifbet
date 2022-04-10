import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
function Slider() {
  return (
    <div className="w-50">
      <Carousel autoPlay={true} interval={3000}>
        <div>
          <Image
            layout="fill"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png"
            alt="image1"
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <Image
            layout="fill"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png"
            alt="image2"
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <Image
            layout="fill"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png"
            alt="image3"
          />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <Image
            layout="fill"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png"
            alt="image4"
          />
          <p className="legend">Image 4</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
