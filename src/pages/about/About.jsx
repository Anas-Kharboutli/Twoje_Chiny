import styles from "./about.module.css";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section className={styles.aboutPageContainer}>
      
      {/* Video - Left Half, Sticky */}
      <div className={styles.videoContainer}>
        <div className={styles.stickyVideo}>
          <video autoPlay muted loop playsInline>
            <source src="/videos/about-video.webm" type="video/webm" />
            <source src="/videos/about-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content - Right Half, Scrollable */}
      <div className={styles.AboutDetails}>
        <TypeAnimation
          sequence={[
            'Who we are?',
            1500, 
            'Twoje Chiny',
            1500,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: '2.5em', marginBottom: '2rem' }}
          repeat={Infinity}
        />
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        {/* Add more content to enable scrolling */}
      </div>

    </section>
  )
}

export default About;