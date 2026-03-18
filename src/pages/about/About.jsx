import styles from "./about.module.css";
import { TypeAnimation } from "react-type-animation";
import { FaRoute, FaMapMarkedAlt, FaHotel, FaUserTie } from "react-icons/fa";


const About = () => {
  return (
    <section className={styles.aboutPageContainer}>
      
      <div className={styles.videoContainer}>
        <div className={styles.stickyVideo}>
          <video autoPlay muted loop playsInline>
            <source src="/videos/about-video.webm" type="video/webm" />
            <source src="/videos/about-video1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.AboutDetails}>
        <TypeAnimation
          sequence={[
            'Who we are?',
            1500, 
            'What we offer',
            1500,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: '2.5em', marginBottom: '2rem' }}
          repeat={Infinity}
        />    
        <p>Twoje Chiny Tours is proudly operated by Kate, a Polish traveler who has spent over 14 years living in Asia, deeply exploring its cultures, traditions, and hidden gems. With a passion for discovery and authentic experiences, she has built a strong connection with the region, especially China. Over the years, Kate has successfully organized and led multiple tours, earning the trust and appreciation of many satisfied travelers.
Her extensive local knowledge allows her to craft unique journeys that go beyond typical tourist paths, offering you a true glimpse into the heart and soul of China. As a fluent Chinese speaker, she effortlessly navigates cultural nuances, ensuring smooth communication and meaningful interactions throughout your trip.
</p>
      </div>
      </div>

      <div className={styles.aboutOffers}>
        <h1>What We Offer</h1>

        <div className={styles.offersContainer}>
    <div className={styles.offerItem}>
      <FaMapMarkedAlt className={styles.toursIcon} />
      <h4>Guided Tours</h4>
    </div>
    
    <div className={styles.offerItem}>
      <FaRoute className={styles.routeIcon} />
      <h4>Custom Travel Planning</h4>
    </div>
    
    <div className={styles.offerItem}>
      <FaHotel className={styles.hotelIcon} />
      <h4>Booking & Logistics</h4>
    </div>
    
    <div className={styles.offerItem}>
      <FaUserTie className={styles.consultIcon} />
      <h4>Travel Consultancy</h4>
    </div>
  </div>
</div>



    </section>
  )
}

export default About;