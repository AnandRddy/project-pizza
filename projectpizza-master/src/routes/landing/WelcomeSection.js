import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from '../../assets/images/section-one/section-one-375.webp'
import img700 from '../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../assets/images/welcome-section/pizza-one-parallax.webp'
import PizzaTwo from '../../assets/images/welcome-section/pizza-two-parallax.webp'
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.div
          className='pizza-motion'
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1, translateX: -100,
            translateY: '-12%'
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <img src={PizzaTwo} alt="" className=" pizza-two" />
        </motion.div>
        <motion.div
          className='pizza-motion'
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1, translateX: 100,
            translateY: '-12%'
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <img src={PizzaOne} alt="" className=" pizza-one" />
        </motion.div>
        <h2 className="txt-white">
          Welcome to <br/> <span>Matt's Golden Pizza</span> <br/> restaurant
        </h2>
        <p>
          Matts golden pizza 2023
        </p>
      </section>
      {/* <LazyLoadImage
        className="section-two-img"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Matt's Golden Pizza restaurant interior with people at the tabel and the staff serving the customers"
      /> */}
    </article>
  )
}

export default WelcomeSection;