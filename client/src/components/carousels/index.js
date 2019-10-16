import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import background from "../assets/background.png";
import schedule from "../assets/schedule.png";
import Login from "../login";

const Carrousels = () => {
  return (
    <CarouselWrapper>
      <Carousel interval={null}>
        <Carousel.Item style={{ width: "100vw", height: "100vh" }}>
          <img
            className="d-block w-100"
            src={background}
            alt="First slide"
            style={{ height: "100%", width: "100%" }}
          />
          <Carousel.Caption>
            <div className="heading">API Mocker</div>
            <div className="body">A faster way to mock your API response!</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={background} alt="Third slide" />
          <Carousel.Caption>
            <div className="heading">Pain points</div>
            <ul className="body list">
              <li>Wait for backend to setup endpoint</li>
              <li>Longer developing cycle</li>
              <li>More time and effort required</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={background} alt="Third slide" />
          <Carousel.Caption>
            <div className="heading">Benefits</div>
            <ul className="body list">
              <li>Decoupled work dependency</li>
              <li>Lesser debugging time</li>
              <li>Speed up development process</li>
              <li>Open to public</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={background} alt="Third slide" />
          <Carousel.Caption>
            <div className="heading">Schedule</div>
            <img
              className="d-block w-100"
              src={schedule}
              alt="Third slide"
              style={{ height: "70%", width: "100%" }}
            ></img>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={background} alt="Third slide" />
          <Carousel.Caption>
            <div className="heading">Where I am now.</div>
            <Login></Login>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
};

export default Carrousels;

const CarouselWrapper = styled.div`
  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    top: 0;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }

  .heading {
    font-size: 3em;
  }
  .body {
    font-size: 2em;
    &.list {
      text-align: left;
      display: block;
    }
  }

  .carousel-item {
    width: 100vw;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
