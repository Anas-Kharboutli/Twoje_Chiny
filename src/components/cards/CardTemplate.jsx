import styles from "./cardTemplate.module.css";
import { Link } from "react-router-dom";

const CardTemplate = ({imgURL, tripDuration, placeName, 
                       country, placeDescription, tripPrice, tripLink}) => {
  return (
    <figure className={styles.figure}>
      <img src={imgURL} alt={country} className={styles.cardImage}/>
      <figcaption className={styles.figcaption}>
        <div className={styles.main}>
          <p className={styles.small}>{tripDuration}</p>
          <h3 className={styles.h3}>{placeName} <em>{country}</em></h3>
          <p className={styles.description}>{placeDescription}</p>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <p className={styles.small}>From</p>
            <p className={styles.price}>{tripPrice}</p>
          </div>
          <Link to={tripLink} className={styles.arrowLink}>
            <img src="/destinations-images/icon-arrow-right-color.svg" alt="Icon" className={styles.arrow}/>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}

export default CardTemplate