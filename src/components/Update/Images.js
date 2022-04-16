import React from 'react'
import img_block from '../../img/afficheur.jpg'
import img_pcba from '../../img/pcba.jpg'
import img_bat from '../../img/bat.jpg'
import {Carousel} from 'react-bootstrap'
function Images() {
  return (
    <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img_block}
      alt="Afficheur"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img_pcba}
      alt="Carte mere"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img_bat}
      alt="Batterie"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default Images