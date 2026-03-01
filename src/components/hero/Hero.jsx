import styles from "./hero.module.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
  const [viewBox, setViewBox] = useState("0 0 1200 800");

  useEffect(() => {
    // Set initial viewBox based on screen size
    const updateViewBox = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewBox("0 0 800 600"); // Mobile
      } else if (width < 1024) {
        setViewBox("0 0 1000 700"); // Tablet
      } else {
        setViewBox("0 0 1200 800"); // Desktop
      }
    };

    updateViewBox();
    window.addEventListener('resize', updateViewBox);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.scrollDist',
          start: '0 0',
          end: '100% 100%',
          scrub: 1
        }
      })
      .fromTo('.sky', {y: 0}, {y: -200}, 0)
      .fromTo('.cloud1', {y: 100}, {y: -800}, 0)
      .fromTo('.cloud2', {y: -150}, {y: -500}, 0)
      .fromTo('.cloud3', {y: -50}, {y: -650}, 0)
      .fromTo('.mountBg', {y: -10}, {y: -100}, 0)
      .fromTo('.mountMg', {y: -30}, {y: -250}, 0)
      .fromTo('.mountFg', {y: -50}, {y: -600}, 0);

    const arrowBtn = document.querySelector('#arrow-btn');

    arrowBtn.addEventListener('mouseenter', () => {
      gsap.to('.arrow', {y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto'});
    });

    arrowBtn.addEventListener('mouseleave', () => {
      gsap.to('.arrow', {y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto'});
    });

    arrowBtn.addEventListener('click', () => {
      gsap.to(window, {scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut'});
    });

    return () => {
      window.removeEventListener('resize', updateViewBox);
    };
  }, []);

  return (
    <>
      <div className={`${styles.scrollDist} scrollDist`}></div>
      <main className={styles.main}>
        <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
            </g>
          </mask>
          
          <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg" width="1400" height="800" />
          <image className="mountBg" xlinkHref="/Hero_images/1.png" width="1200" height="700" y="250" x="-100"/>    
          <image className="mountMg" xlinkHref="" width="1200" height="800"/>    
          <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
          <image className="mountFg" xlinkHref="/Hero_images/3.png" width="2200" height="800" y="50"/>
          <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
          <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
          <text fill="#fff" x="350" y="300">WITAMY</text>
          <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
          
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="350" y="300" fill="#162a43">W CHINACH</text>
          </g>
          
          <rect id="arrow-btn" width="100" height="100" opacity="0" x="550" y="220" style={{cursor: "pointer"}}/>
        </svg>
      </main>
    </>
  );
};

export default Hero;