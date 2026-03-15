import { useEffect } from "react";
import styles from "./tripsProgramTemplate.module.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineTour } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { PiBatteryVerticalHighLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const TripsProgramTemplate = ({
  tripTitle,
  placeLocation,
  carouselImages,
  highlights,
  tripDays,
  tourType,
  tourIntensity
}) => {

  useEffect(() => {
    const scrollElement = document.querySelector(".scrollspy-example");

    if (scrollElement) {
      const existingInstance = bootstrap.ScrollSpy.getInstance(scrollElement);
      if (existingInstance) existingInstance.dispose();

      new bootstrap.ScrollSpy(scrollElement, {
        target: "#list-example",
        offset: 10
      });
    }

    // Initialize Carousel
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }, [tripDays]);

  return (
    <>
      {/* TITLE */}
      <div className={styles.programTitleDetails}>
        <h1>{tripTitle}</h1>
        <span>
          <FaLocationDot className={styles.locationIcon}/>
          {placeLocation}
        </span>
      </div>

      {/* OVERVIEW */}
      <div className={styles.programOverview}>

        {/* CAROUSEL */}
        <div className={styles.programCarousell}>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
              {carouselImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className={`${styles["carousel-inner"]} carousel-inner`}>
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img src={img} alt={`Slide ${index + 1}`}/>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>

        {/* DETAILS */}
        <div className={styles.programOverviewDetails}>

          <span>
            <MdOutlineTour className={styles.tourIcon}/>
            Tour Type: <b>{tourType}</b>
          </span>
          <br/>

          <span>
            <SiLevelsdotfyi className={styles.intensityIcon}/>
            Tour Intensity: <b>{tourIntensity}</b>
          </span>
          <br/>

          <span>
            <PiBatteryVerticalHighLight className={styles.highlightIcon}/>
            Tour Highlights:
          </span>

          <ul>
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>
      </div>

      {/* ITINERARY */}
      <h3>Program Itinerary</h3>

      <div className={styles.scrollspyContainer}>
        <div className="row">

          {/* NAV */}
          <div className="col-4">
            <div id="list-example" className={`list-group ${styles.stickyNav}`}>
              {tripDays.map((day, index) => (
               <a 
                  key={index}
                  className="list-group-item list-group-item-action"
                  href={`#list-item-${index + 1}`}
                >
                  Day {index + 1}
                </a>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-8">
            <div
              className={`scrollspy-example ${styles.scrollableContent}`}
              tabIndex="0"
            >
              {tripDays.map((day, index) => (
                <div 
                  key={index} 
                  id={`list-item-${index + 1}`}
                  className={styles.section}
                >
                  <h4>{day.title}</h4>
                  <p>{day.description}</p>

                  {day.activities && day.activities.map((activity, i) => (
                    <p key={i}>{activity}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    
      <div className={styles.contactButoon}>
        <Link to="/contact">
          <button className={`${styles.contactButton} btn btn-danger`}>
            How to Book
          </button>
        </Link>
      </div>
    </>
  );
};

export default TripsProgramTemplate;