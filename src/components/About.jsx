import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from '../hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ServiceCard = ({ index, title, icon }) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", .5 * index, .75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview... 
          <a href="https://www.linkedin.com/in/sripad-sirikonda-cs" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ marginLeft: '10px' }} />
          </a>
          <a href="https://github.com/sripadsirik" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="1x" style={{ marginLeft: '5px' }} />
          </a>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", .1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a junior at the University of Illinois Chicago, majoring in Computer Science with a 3.81 GPA. My interests lie in machine learning, AI, and software development, and I have hands-on experience in developing AI/ML models for water optimizing systems. I enjoy collaborating on innovative projects and have a passion for teaching and mentoring in the field of coding. Additionally, I have developed several mobile and web applications, showcasing my ability to create practical and impactful software solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")