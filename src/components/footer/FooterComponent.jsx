import styles from "./footerComponenet.module.css"
import { Link } from "react-router-dom"
import { FaYoutubeSquare, FaFacebook  } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const FooterMedia = () => (
  <> 
<h4>Our Social Media</h4>  
<div className={styles.socialMediaLinks}>
<a href="" target="blank" rel="noreferrer">
          YouTube <FaYoutubeSquare className={styles.footerYoutubeIcon}/></a>
        
      <a href="" target="blank" rel="noreferrer">
          Facebook <FaFacebook className={styles.footerFacebookIcon}/></a>
          
      <a href="" target="blank" rel="noreferrer">
          Tiktok <AiFillTikTok className={styles.footerTiktokIcon}/></a>
          
      <a href="" target="blank" rel="noreferrer">
          Instagram <FaInstagram className={styles.footerInstagramIcon}/></a>
</div>  
  </>
);

const FooterNavigation = () => (
  <>
  <h4>Navigation</h4>
  <div className={styles.FooterNavigationLinks}>
  <Link to={"/"} >Home</Link>
  <Link to={"/"} >Trips Packages</Link>
  <Link to={"/faqs"} >FAQs</Link>
  <Link to={"/last-trips"} >Latest Trips</Link>
  <Link to={"/contact"} >Contact</Link>
  </div>
  </>
);

const FooterComponent = () => {
  return (
    <section>
 <div className={styles["custom-shape-divider-top-1773001827"]}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className={styles["shape-fill"]}></path>
    </svg>
</div>

<div className={styles.footerContent}>

  <div className={styles.footerTitle}>
    <h2>Discover the beauty of China, where every journey becomes a story</h2>
  </div>
  
  <div className={styles.footerMedia}>
    <FooterMedia />
  </div>

  <div className={styles.footerNavigation}>
    <FooterNavigation />
  </div>

</div>

</section>
  )
}

export default FooterComponent
