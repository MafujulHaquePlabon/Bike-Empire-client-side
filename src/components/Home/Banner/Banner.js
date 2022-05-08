import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='w-100'>
            <Carousel>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100 "
      src=" https://img.freepik.com/free-photo/motorcycle-parking-road-right-side-sunset_38575-88.jpg?w=1380"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-success">Welcome to Website</h3>
      <h5 className="text-success"></h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/portrait-african-man-helmet_171337-10265.jpg?t=st=1652019492~exp=1652020092~hmac=da1591519da751640564f22364f075774138679a6726faacdef5b5171ee62903&w=1060"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-success">Welcome to Website</h3>
      <h5 className="text-success"></h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/man-motorcycle-parking-road-left-side-sunset_38575-9.jpg?w=1060"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-success">Welcome to Website</h3>
      <h5 className="text-success"></h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;