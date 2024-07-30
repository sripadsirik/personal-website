import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto`}
      // style={{
      //   backgroundImage: 'url(./public/maybe.png)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            backdropFilter: 'blur(10px)', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)', 
            transform: 'translateZ(0)' 
          }}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Sripad<span style={{ position: 'relative', zIndex: 2 }}>
                <a href="https://www.linkedin.com/in/sripad-sirikonda-cs" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ marginLeft: '10px', color: 'red' }} />
                </a>
                <a href="https://github.com/sripadsirik" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="1x" style={{ marginLeft: '5px', color: 'red' }} />
                </a>
              </span></span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              AI/ML Models for Water Infrastructure Optimization Intern | <br className='sm:block hidden' />
              Passionate Software Engineer | AI/ML Practitioner
            </p>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-25 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;