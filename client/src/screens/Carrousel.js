import React from "react";
import { Carousel } from "react-bootstrap";

const carrousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://developing.fr/wp-content/uploads/2019/03/developing-diagnostic-orientation-client.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://static.lematin.ma/files/lematin/images/articles/2020/07/f59ddbc59dac600a5493fbfd6f5e87dd.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s1.edi-static.fr/Images/Archives/AC/AC303/Para173980.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default carrousel;
