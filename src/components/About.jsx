import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} 
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Following my Software Developer training, I began taking on larger and more challenging projects as a Frontend Developer through personal projects.
    With a robust grasp of Javascript, HTML, CSS, and React, I am dedicated to further developing my technical skills to deliver impactful solutions and create exceptional user experiences.

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    )
}

export default About