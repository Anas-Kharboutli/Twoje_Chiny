import {useRef} from 'react';
import { card } from '../../utils/cards_data';
import { PackageTemplate } from "../../utils/exports";
import styles from "./tripsPackage.module.css"
import { motion, useInView } from 'framer-motion';

const TripsPackage = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0,  opacity: 1}    
  };
  return (
     <div 
        className={styles["trips-container"]}
        ref={ref}>
    
          <ul className={styles.gallery}>
            {
              card.map((card, index) => (
                    
                    <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 1, delay: index * 0.4}}>
    
                    <PackageTemplate 
                    imgURL={card.imgURL}
                    tripDuration={card.tripDuration}
                    placeName={card.placeName}
                    placeDescription={card.placeDescription}
                    tripPrice={card.tripPrice}
                    tripLink={card.tripLink}
                    />
                    </motion.li>
                ))
            }
            </ul>
        </div>  
  )
}

export default TripsPackage
