import styles from "./hero.module.css";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  const timelineRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  // Calculate responsive values based on screen size
  const getResponsiveValues = () => {
    const isMobile = dimensions.width < 768;
    const isTablet = dimensions.width >= 768 && dimensions.width < 1024;
    
    return {
      // ViewBox for better mobile scaling
      viewBox: isMobile ? "0 0 800 600" : isTablet ? "0 0 1000 700" : "0 0 1200 800",
      
      // Image dimensions and positions
      sky: {
        width: isMobile ? 1000 : isTablet ? 1200 : 1400,
        height: isMobile ? 600 : isTablet ? 700 : 800,
        x: 0,
        y: 0
      },
      mountBg: {
        width: isMobile ? 600 : isTablet ? 750 : 900,
        height: isMobile ? 350 : isTablet ? 425 : 500,
        x: isMobile ? -50 : isTablet ? -75 : -100,
        y: isMobile ? 100 : isTablet ? 125 : 150
      },
      mountMg: {
        width: isMobile ? 800 : isTablet ? 1000 : 1200,
        height: isMobile ? 600 : isTablet ? 700 : 800,
        x: 0,
        y: 0
      },
      mountFg: {
        width: isMobile ? 1400 : isTablet ? 1800 : 2200,
        height: isMobile ? 600 : isTablet ? 700 : 800,
        x: 0,
        y: isMobile ? -30 : isTablet ? -40 : -50
      },
      clouds: {
        width: isMobile ? 800 : isTablet ? 1000 : 1200,
        height: isMobile ? 600 : isTablet ? 700 : 800,
        x: 0,
        y: 0
      },
      
      // Mask rectangle position (key for hiding top content)
      maskRectY: isMobile ? 500 : isTablet ? 650 : 799,
      
      // Text positions
      textX: isMobile ? 250 : isTablet ? 250 : 450,
      textY: isMobile ? 400 : isTablet ? 275 : 180,
      fontSize: isMobile ? 40 : isTablet ? 60 : 72,
      
      // Arrow positions
      arrowX: isMobile ? 400 : isTablet ? 500 : 620,
      arrowY: isMobile ? 320 : isTablet ? 200 : 220,
      
      // Animation distances (scale down on smaller screens)
      skyY: isMobile ? -100 : -200,
      cloud1Y: isMobile ? -400 : -800,
      cloud2Y: isMobile ? -250 : -500,
      cloud3Y: isMobile ? -325 : -650,
      mountBgY: isMobile ? -50 : -100,
      mountMgY: isMobile ? -125 : -250,
      mountFgY: isMobile ? -300 : -600,
    };
  };

  const responsive = getResponsiveValues();

  useEffect(() => {
    // Create GSAP timeline
    const createTimeline = () => {
      // Kill existing timeline if it exists
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      timelineRef.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.scrollDist',
            start: '0 0',
            end: '100% 100%',
            scrub: 1,
            invalidateOnRefresh: true
          }
        })
        .fromTo('.sky', {y: 0}, {y: responsive.skyY}, 0)
        .fromTo('.cloud1', {y: 100}, {y: responsive.cloud1Y}, 0)
        .fromTo('.cloud2', {y: -150}, {y: responsive.cloud2Y}, 0)
        .fromTo('.cloud3', {y: -50}, {y: responsive.cloud3Y}, 0)
        .fromTo('.mountBg', {y: -10}, {y: responsive.mountBgY}, 0)
        .fromTo('.mountMg', {y: -30}, {y: responsive.mountMgY}, 0)
        .fromTo('.mountFg', {y: -50}, {y: responsive.mountFgY}, 0);
    };

    createTimeline();

    // Handle window resize with debounce
    const handleResize = () => {
      // Clear existing timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Debounce resize
      resizeTimeoutRef.current = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
        
        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
      }, 150); // Wait 150ms after resize stops
    };

    window.addEventListener('resize', handleResize);

    // Arrow button interactions
    const arrowBtn = document.querySelector('#arrow-btn');

    const handleMouseEnter = () => {
      gsap.to('.arrow', {y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto'});
    };

    const handleMouseLeave = () => {
      gsap.to('.arrow', {y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto'});
    };

    const handleClick = () => {
      gsap.to(window, {scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut'});
    };

    if (arrowBtn) {
      arrowBtn.addEventListener('mouseenter', handleMouseEnter);
      arrowBtn.addEventListener('mouseleave', handleMouseLeave);
      arrowBtn.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (arrowBtn) {
        arrowBtn.removeEventListener('mouseenter', handleMouseEnter);
        arrowBtn.removeEventListener('mouseleave', handleMouseLeave);
        arrowBtn.removeEventListener('click', handleClick);
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [responsive.skyY, responsive.cloud1Y, responsive.cloud2Y, responsive.cloud3Y, responsive.mountBgY, responsive.mountMgY, responsive.mountFgY]); // Only re-run when animation values change

  return (
    <>
      <div className={`${styles.scrollDist} scrollDist`}></div>
      <main className={styles.main}>
        <svg 
          viewBox={responsive.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y={responsive.maskRectY} />
              <image 
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" 
                width={responsive.clouds.width} 
                height={responsive.clouds.height}
              />
            </g>
          </mask>
          
          {/* Sky */}
          <image 
            className="sky" 
            xlinkHref="https://assets.codepen.io/721952/sky.jpg" 
            width={responsive.sky.width} 
            height={responsive.sky.height}
            x={responsive.sky.x}
            y={responsive.sky.y}
          />
          
          {/* Mountain Background */}
          <image 
            className="mountBg" 
            xlinkHref="/Hero_images/1.png" 
            width={responsive.mountBg.width} 
            height={responsive.mountBg.height}
            x={responsive.mountBg.x}
            y={responsive.mountBg.y}
          />
          
          {/* Mountain Middle Ground */}
          <image 
            className="mountMg" 
            xlinkHref="" 
            width={responsive.mountMg.width} 
            height={responsive.mountMg.height}
            x={responsive.mountMg.x}
            y={responsive.mountMg.y}
          />
          
          {/* Cloud 2 */}
          <image 
            className="cloud2" 
            xlinkHref="" 
            width={responsive.clouds.width} 
            height={responsive.clouds.height}
            x={responsive.clouds.x}
            y={responsive.clouds.y}
          />
          
          {/* Mountain Foreground */}
          <image 
            className="mountFg" 
            xlinkHref="/Hero_images/3.png" 
            width={responsive.mountFg.width} 
            height={responsive.mountFg.height}
            x={responsive.mountFg.x}
            y={responsive.mountFg.y}
          />
          
          {/* Cloud 1 */}
          <image 
            className="cloud1" 
            xlinkHref="https://assets.codepen.io/721952/cloud1.png" 
            width={responsive.clouds.width} 
            height={responsive.clouds.height}
            x={responsive.clouds.x}
            y={responsive.clouds.y}
          />
          
          {/* Cloud 3 */}
          <image 
            className="cloud3" 
            xlinkHref="https://assets.codepen.io/721952/cloud3.png" 
            width={responsive.clouds.width} 
            height={responsive.clouds.height}
            x={responsive.clouds.x}
            y={responsive.clouds.y}
          />
          
          {/* Text WITAMY */}
          <text 
            fill="#fff" 
            x={responsive.textX} 
            y={responsive.textY}
            fontSize={responsive.fontSize}
            textAnchor="middle"
          >
            WITAMY
          </text>
          
          {/* Arrow */}
          <polyline 
            className="arrow" 
            fill="#fff" 
            points={`${responsive.arrowX},${responsive.arrowY + 30} ${responsive.arrowX},${responsive.arrowY + 69} ${responsive.arrowX - 9},${responsive.arrowY + 59} ${responsive.arrowX - 9},${responsive.arrowY + 62} ${responsive.arrowX + 1},${responsive.arrowY + 72} ${responsive.arrowX + 11},${responsive.arrowY + 62} ${responsive.arrowX + 11},${responsive.arrowY + 59} ${responsive.arrowX + 2},${responsive.arrowY + 69} ${responsive.arrowX + 2},${responsive.arrowY + 30}`}
          />
          
          {/* Masked Section - Only shows "W CHINACH" */}
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text 
              x={responsive.textX} 
              y={responsive.textY} 
              fill="#162a43"
              fontSize={responsive.fontSize}
              textAnchor="middle"
            >
              W CHINACH
            </text>
          </g>
          
          {/* Invisible button for arrow interaction */}
          <rect 
            id="arrow-btn" 
            width="100" 
            height="100" 
            opacity="0" 
            x={responsive.arrowX - 50} 
            y={responsive.arrowY} 
            style={{cursor: "pointer"}}
          />
        </svg>
      </main>
    </>
  );
};

export default Hero;