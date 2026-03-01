import React, {useRef} from 'react';
import { card } from '../../utils/cards_data';
import { CardTemplate } from "../../utils/exports";
import './tripsCard.css';
import { motion, useInView } from 'framer-motion';

const TripsCard = () => {

    const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0,  opacity: 1}    
  };

  return (
    <div 
    className='trips-container section__padding'
    ref={ref}>

      <ul className="gallery">
		{
		  card.map((card, index) => (
				
                <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: index * 0.4}}>

				<CardTemplate 
				imgURL={card.imgURL}
				tripDuration={card.tripDuration}
				placeName={card.placeName}
				country={card.country}
				placeDescription={card.placeDescription}
				tripPrice={card.tripPrice}
				/>
				</motion.li>
			))
		}
		</ul>
    </div>
  )
}

export default TripsCard
