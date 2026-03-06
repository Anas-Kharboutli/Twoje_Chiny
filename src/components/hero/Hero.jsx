import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/all';
import styles from "./hero.module.css"

gsap.registerPlugin(ScrollTrigger, Flip);

const Hero = () => {

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
    <>
      <div className={styles.galleryWrap}>
  <div className={`${styles.gallery} ${styles.galleryBento} ${styles["gallery--switch"]}`} id="gallery-8">
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-pattern-1.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-image-12.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-image-8.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-pattern-2.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-image-4.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-image-3.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-pattern-3.jpg" alt="" />
    </div>
    <div className={styles.galleryItem}>
      <img src="https://assets.codepen.io/16327/portrait-image-1.jpg" alt="" />
    </div>

  </div>
</div>
<div className={styles.section}>
  <h2>Here is some content</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
    </>
  );
};

export default Hero;