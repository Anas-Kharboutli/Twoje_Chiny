import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/all';
import styles from "./hero.module.css"
import TripsPackage from '../tripsPackage/TripsPackage';

gsap.registerPlugin(ScrollTrigger, Flip);

const Hero = () => {
    const wrapperRef = useRef(null);
  const galleryRef = useRef(null);

 useEffect(() => {
  console.clear();

  let flipCtx;
  let scrollTriggerInstance;

  const createTween = () => {
    const galleryElement = document.querySelector("#gallery-8");
    const galleryItems = galleryElement?.querySelectorAll(`[class*="galleryItem"]`);

    if (!galleryElement || !galleryItems?.length) return;

    console.log(flipCtx);

    // Clean up previous instance
    if (flipCtx) flipCtx.revert();
    if (scrollTriggerInstance) scrollTriggerInstance.kill();
    
    galleryElement.classList.remove(styles.galleryFinal);

    flipCtx = gsap.context(() => {
      // Temporarily add the final class to capture the final state
      galleryElement.classList.add(styles.galleryFinal);
      const flipState = Flip.getState(galleryItems);
      galleryElement.classList.remove(styles.galleryFinal);

      const flip = Flip.to(flipState, {
        simple: true, 
         ease: "expoScale(1, 5)"
      }); 

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryElement,
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: galleryElement.parentNode,
          onRefresh: (self) => {
            scrollTriggerInstance = self;
          }
        }
      });
      tl.add(flip);
      
      // Store the ScrollTrigger instance
      scrollTriggerInstance = tl.scrollTrigger;
      
      return () => gsap.set(galleryItems, { clearProps: "all" });
    });
  };
  
  createTween();

  window.addEventListener("resize", createTween);

  // PROPER CLEANUP - prevents React errors on unmount
  return () => {
    window.removeEventListener("resize", createTween);
    
    // Kill ScrollTrigger first (unpins elements)
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill(true);
    }
    ScrollTrigger.getAll().forEach(st => st.kill(true));
    
    // Then revert context
    if (flipCtx) {
      flipCtx.revert();
    }
  };
}, []);

  return (
    <main>
     <div ref={wrapperRef} className={styles.galleryWrap}>
  <div    ref={galleryRef} className={`${styles.gallery} ${styles.galleryBento} ${styles["gallery--switch"]}`} id="gallery-8">
    <div className={styles.galleryItem}>
      <img src="/Hero_images/1.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/2.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/3.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/4.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/5.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/6.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/7.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="/Hero_images/8.jpg" alt="" />
    </div>

  </div>
</div>
<div className={styles.section} id='Packages'>
  <h2>Check our upcoming trips</h2>
  <TripsPackage />
  
</div>
    </main>
   
  );
};

export default Hero;