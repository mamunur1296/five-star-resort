import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carosal.css";
import img1 from "../../assats/carosal1.webp";
import img2 from "../../assats/carosal2.webp";
import img3 from "../../assats/carosal3.webp";

const Carusol = () => {
  return (
    <div className="my-3n">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block hight-carosal w-100 "
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hight-carosal w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hight-carosal w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carusol;
