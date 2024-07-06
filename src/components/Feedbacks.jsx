import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>More</p>
          <h2 className={styles.sectionHeadText}>Resume...</h2>
        </motion.div>
        {/* PDF Display */}
        <iframe
          src="../public/Sripad Sirikonda Resume 3.pdf"
          width="100%"
          height="1110px"
          style={{border: 'none'}}
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="Sripad Sirikonda Resume 3.pdf">Download PDF</a>.</p>
        </iframe>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");