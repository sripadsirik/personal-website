import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from '../hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import meImage1 from '../assets/me.JPG';
import meImage2 from '../assets/me1.JPG';
import meImage3 from '../assets/me2.jpg';
import meImage4 from '../assets/me3.jpg';
import meImage5 from '../assets/me4.JPG';
import meImage6 from '../assets/me5.JPEG';
import meImage7 from '../assets/me6.JPG';


// Then use the imported images in your images array
const images = [meImage1, meImage2, meImage3, meImage4, meImage5, meImage6, meImage7];

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

// const imageContainerStyle = {
//   width: '300px', // Set the width of the crop
//   height: '300px', // Set the height of the crop
//   backgroundPosition: 'center', // Center the image within the div
//   backgroundSize: 'cover', // Cover the div area, cropping the image as needed
//   backgroundImage: `url(${meImage})`, // Use the image as the background
//   borderRadius: '10px', // Optional: if you want rounded corners
// };

// const getImageContainerStyle = () => {
//   const baseStyle = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundImage: `url(${meImage})`,
//     borderRadius: '10px',
//   };

//   // Adjust size for small devices
//   if (window.innerWidth < 600) {
//     return {
//       ...baseStyle,
//       width: '200px', // Smaller width for small devices
//       height: '200px', // Smaller height for small devices
//     };
//   }

//   // Default size for larger devices
//   return {
//     ...baseStyle,
//     width: '300px',
//     height: '300px',
//   };
// };

const imageContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '10px',
};

const imageStyle = {
  width: '250px', // Adjust based on your layout needs
  height: '250px', // Adjust based on your layout needs
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '10px',
};

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
        {/* <div style={imageContainerStyle} alt="Sripad"></div> */}
        <div style={imageContainerStyle}>
          {images.map((meImage, index) => (
            <div
              key={index}
              style={{ ...imageStyle, backgroundImage: `url(${meImage})` }}
              role="img"
              aria-label={`Sripad ${index + 1}`}
            ></div>
          ))}
        </div>
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