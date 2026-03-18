import styles from "./imageSlider.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import image1 from "../../../public/Memories/1.webp";
import image2 from "../../../public/Memories/2.webp";
import image3 from "../../../public/Memories/3.webp";
import image4 from "../../../public/Memories/4.webp";
import image5 from "../../../public/Memories/5.webp";
import image6 from "../../../public/Memories/6.webp";
import image7 from "../../../public/Memories/7.webp";
import image8 from "../../../public/Memories/8.webp";
import image9 from "../../../public/Memories/9.webp";
import image10 from "../../../public/Memories/10.webp";
import image11 from "../../../public/Memories/11.webp";
import image12 from "../../../public/Memories/12.webp";
import image13 from "../../../public/Memories/13.webp";
import image14 from "../../../public/Memories/14.webp";
import image15 from "../../../public/Memories/15.webp";
import image16 from "../../../public/Memories/16.webp";
import image17 from "../../../public/Memories/17.webp";
import image18 from "../../../public/Memories/18.webp";
import image19 from "../../../public/Memories/19.webp";
import image20 from "../../../public/Memories/20.webp";
import image21 from "../../../public/Memories/21.webp";
import image22 from "../../../public/Memories/22.webp";
import image23 from "../../../public/Memories/23.webp";
import image24 from "../../../public/Memories/24.webp";
import image25 from "../../../public/Memories/25.webp";
import image26 from "../../../public/Memories/26.webp";
import image27 from "../../../public/Memories/27.webp";
import image28 from "../../../public/Memories/28.webp";
import image29 from "../../../public/Memories/29.webp";
import image30 from "../../../public/Memories/30.webp";
import image31 from "../../../public/Memories/31.webp";
import image32 from "../../../public/Memories/32.webp";
import image33 from "../../../public/Memories/33.webp";
import image34 from "../../../public/Memories/34.webp";
import image35 from "../../../public/Memories/35.webp";
import image36 from "../../../public/Memories/36.webp";
import image37 from "../../../public/Memories/37.webp";
import image38 from "../../../public/Memories/38.webp";
import image39 from "../../../public/Memories/39.webp";


const ImageSlider = () => {
  const mainRef = useRef(null);
  const mainBoxesRef = useRef(null);
  const mainCloseRef = useRef(null);

  const images = [
     image1, image2, image3, image4, image5, image6, image7, image8,
     image9, image10, image11, image12, image13, image14, image15, image16,
     image17, image18, image19, image20, image21, image22, image23, image24,
     image25, image26, image27, image28, image29, image30, image31, image32,
     image33, image34, image35, image36, image37, image38, image39
  ];

  useEffect(() => {
    let currentImg = undefined;
    let currentImgProps = { x: 0, y: 0 };
    let isZooming = false;
    let column = -1;
    let mouse = { x: 0, y: 0 };
    let delayedPlay;

    const mainBoxes = mainBoxesRef.current;
    const mainClose = mainCloseRef.current;
    const main = mainRef.current;

    // Create photo boxes
    for (let i = 0; i < 12; i++) {
      if (i % 4 === 0) column++;

      const b = document.createElement('div');
      mainBoxes.appendChild(b);

      gsap.set(b, {
        attr: { id: 'b' + i, class: `${styles.photoBox} pb-col${column}` },
        backgroundImage: `url(${images[i]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        x: [60, 280, 500][column],
        width: 400,
        height: 640,
        borderRadius: 20,
        scale: 0.5,
        zIndex: 1
      });

      b.tl = gsap.timeline({ paused: true, repeat: -1 })
        .fromTo(b, 
          { y: [-575, 800, 800][column], rotation: -0.05 }, 
          { duration: [40, 35, 26][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none' }
        )
        .progress((i % 4) / 4);
    }

    function pauseBoxes(box) {
      let classStr = 'pb-col0';
      if (box.classList.contains('pb-col1')) classStr = 'pb-col1';
      if (box.classList.contains('pb-col2')) classStr = 'pb-col2';
      
      const children = mainBoxes.children;
      for (let i = 0; i < children.length; i++) {
        const b = children[i];
        if (b.classList.contains(classStr)) {
          gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
        }
      }
    }

    function playBoxes() {
      const children = mainBoxes.children;
      for (let i = 0; i < children.length; i++) {
        const tl = children[i].tl;
        tl.play();
        gsap.to(tl, { duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true });
      }
    }

    // Initialize animation
    gsap.timeline({ onStart: playBoxes })
      .set(main, { perspective: 800 })
      .set(`.${styles.photoBox}`, { opacity: 1, cursor: 'pointer' })
      .set(mainBoxes, { left: '75%', xPercent: -50, width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10 })
      .set(mainClose, { autoAlpha: 0, width: 60, height: 60, left: -30, top: -31, pointerEvents: 'none' })
      .fromTo(main, { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2);

    // Event handlers
    const handleMouseEnter = (e) => {
      if (currentImg) return;
      if (delayedPlay) delayedPlay.kill();
      pauseBoxes(e.currentTarget);
      
      const photoBoxes = mainBoxes.querySelectorAll(`.${styles.photoBox}`);
      gsap.to(photoBoxes, { 
        duration: 0.2, 
        overwrite: 'auto', 
        opacity: function(i, t) { return (t === e.currentTarget) ? 1 : 0.33 } 
      });
      gsap.fromTo(e.currentTarget, { zIndex: 100 }, { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' });
    };

    const handleMouseLeave = (e) => {
      if (currentImg) return;
      const _t = e.currentTarget;

      if (gsap.getProperty(_t, 'scale') > 0.62) {
        delayedPlay = gsap.delayedCall(0.3, playBoxes);
      } else {
        playBoxes();
      }

      const photoBoxes = mainBoxes.querySelectorAll(`.${styles.photoBox}`);
      gsap.timeline()
        .set(_t, { zIndex: 1 })
        .to(_t, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
        .to(photoBoxes, { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
    };

    const handleClick = (e) => {
      if (!isZooming) {
        isZooming = true;
        gsap.delayedCall(0.8, () => { isZooming = false });

        const photoBoxes = mainBoxes.querySelectorAll(`.${styles.photoBox}`);

        if (currentImg) {
          gsap.timeline({ defaults: { ease: 'expo.inOut' } })
            .to(mainClose, { duration: 0.1, autoAlpha: 0, overwrite: true }, 0)
            .to(mainBoxes, { duration: 0.5, scale: 1, left: '75%', width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10, overwrite: true }, 0)
            .to(photoBoxes, { duration: 0.6, opacity: 1, ease: 'power4.inOut' }, 0)
            .to(currentImg, { duration: 0.6, width: 400, height: 640, borderRadius: 20, x: currentImgProps.x, y: currentImgProps.y, scale: 0.5, rotation: 0, zIndex: 1 }, 0);
          currentImg = undefined;
        } else {
          pauseBoxes(e.currentTarget);
          currentImg = e.currentTarget;
          currentImgProps.x = gsap.getProperty(currentImg, 'x');
          currentImgProps.y = gsap.getProperty(currentImg, 'y');

          gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
            .set(currentImg, { zIndex: 100 })
            .fromTo(mainClose, { x: mouse.x, y: mouse.y, background: 'rgba(0,0,0,0)' }, { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' }, 0)
            .to(photoBoxes, { opacity: 0 }, 0)
            .to(currentImg, { width: '100%', height: '100%', borderRadius: 0, x: 0, top: 0, y: 0, scale: 1, opacity: 1 }, 0)
            .to(mainBoxes, { duration: 0.5, left: '50%', width: '100%', rotationX: 0, rotationY: 0, rotationZ: 0 }, 0.15)
            .to(mainBoxes, { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' }, 0.65);
        }
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (currentImg) {
        gsap.to(mainClose, { duration: 0.1, x: mouse.x, y: mouse.y, overwrite: 'auto' });
      }
    };

    // Add event listeners
    const photoBoxes = mainBoxes.querySelectorAll(`.${styles.photoBox}`);
    photoBoxes.forEach(box => {
      box.addEventListener('mouseenter', handleMouseEnter);
      box.addEventListener('mouseleave', handleMouseLeave);
      box.addEventListener('click', handleClick);
    });

    if ('ontouchstart' in window) {
      mouse.x = window.innerWidth - 50;
      mouse.y = 60;
    } else {
      main.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup
    return () => {
      photoBoxes.forEach(box => {
        box.removeEventListener('mouseenter', handleMouseEnter);
        box.removeEventListener('mouseleave', handleMouseLeave);
        box.removeEventListener('click', handleClick);
      });
      main.removeEventListener('mousemove', handleMouseMove);
      while (mainBoxes.firstChild) {
        mainBoxes.removeChild(mainBoxes.firstChild);
      }
    };
  }, []);

  return (
    <div className={styles.main} ref={mainRef}>
      <div className={styles.mainBoxes} ref={mainBoxesRef}></div>
      <div className={styles.mainClose} ref={mainCloseRef}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
          <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4" />
          <path d="M15,16L45,46 M45,16L15,46" stroke="#000" strokeWidth="3.5" opacity="0.5" />
          <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default ImageSlider;