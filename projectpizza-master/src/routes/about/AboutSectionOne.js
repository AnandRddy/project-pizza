import React from 'react'
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


export default class AboutSectionOne extends React.Component {
  render() {
    return (
      <article className="section-one">

        <section className="section-one-content">
          <h1>About us</h1>
          <h2 className="main-title">More than delicious food</h2>
          <p>
            matts golden pizza 2023
          </p>
        </section>
        <div className="dark-glass"></div>
        <section className="aboutus-img-grid">
          <img src={SlideOne} alt="" aria-hidden="true" />
          <img src={SlideTwo} alt="" aria-hidden="true" />
          <img src={SlideThree} alt="" aria-hidden="true" />
          <img src={SlideFour} alt="" aria-hidden="true" />
        </section>

      </article>
    )
  }
}