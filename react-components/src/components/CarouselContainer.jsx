import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding: 2em;
`

const Item = styled.div`
  height: 100px;
  background: #5f9ea0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const CarouselContainer = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
  }
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Container>
        <Slider {...settings}>
          <div><Item>1</Item></div>
          <div><Item>2</Item></div>
          <div><Item>3</Item></div>
          <div><Item>4</Item></div>
          <div><Item>5</Item></div>
          <div><Item>6</Item></div>
        </Slider>
      </Container>
    </Fragment>
  )
}

export default CarouselContainer;