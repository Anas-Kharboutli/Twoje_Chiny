import styles from "./packageTemplate.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const PackageTemplate = ({imgURL, tripDuration, placeName, 
                       placeDescription, tripPrice, tripLink}) => {
  return (
     <>
    <div className={`${styles.card} card`} style={{width: "18rem"}}>
  <img src={imgURL} className={`${styles["card-img-top"]} card-img-top`} alt="trip package img"/>
  <div className="card-body">
    <h3 className={`${styles["card-title"]} card-title`}>{placeName}</h3>
    <p className="card-text"><FaLocationDot className={styles.locationIcon} />
      {placeDescription}</p> 
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Duration: {tripDuration}</li>
    <li className="list-group-item">{tripPrice}</li>
  </ul>
  <div className="card-body">
    <Link to={tripLink} className={`${styles.btn} btn btn-danger`}>View Details</Link>
  </div>
</div>
</>
  )
}

export default PackageTemplate
