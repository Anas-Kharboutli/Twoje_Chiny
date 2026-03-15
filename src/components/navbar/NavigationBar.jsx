import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import styles from "./NavigationBar.module.css";

const NameLogo = () => {
  return (
    <NavLink to='/'>
      <img src='/logo-01.png' alt='logo' />
    </NavLink>  
  );
};

// Facebook & Youtube Icons
const Icons = () => (
  <>
    <a href='' target='_blank' rel="noreferrer">
      <FaFacebook className={styles['facebook-icon']} />
    </a>
    <a href='' target='_blank' rel="noreferrer">
      <FaYoutube className={styles['youtube-icon']} />
    </a>
  </>
);

const Menu = ({ onLinkClick }) => {
  const getLinkClass = ({isActive}) => {
    return `${styles['nav-item-link']} ${isActive ? styles['active-link'] : ''}`;
  }
  
 return (
  <ul>
    <li className={styles['nav-item']}>
      <NavLink to="/" onClick={onLinkClick} className={getLinkClass}>Home</NavLink>
    </li>
    <li className={styles['nav-item']}>
      <NavLink to="/last-trips" onClick={onLinkClick} className={getLinkClass}>Last Trips</NavLink>
    </li>
    <li className={styles['nav-item']}>
      <NavLink to="/faqs" onClick={onLinkClick} className={getLinkClass}>FAQs</NavLink>
    </li>
    <li className={styles['nav-item']}>
      <NavLink to="/about-us" onClick={onLinkClick} className={getLinkClass}>About</NavLink>
    </li>
    <li className={styles['nav-item']}>
      <NavLink to="/contact" onClick={onLinkClick} className={getLinkClass}>Contact</NavLink>
    </li>
  </ul> 
);
}

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = () => setToggleMenu(false);

  return (
    <nav className={styles.nav}>
      <div className={styles['navbar-container']}>
        <div className={styles.logo}>
          <NameLogo />     
        </div>
        
        <div className={styles['navbar-links']}>
          <Menu onLinkClick={handleLinkClick} />
        </div>  
        
        <div className={styles['navbar-icons']}>
          <Icons />
        </div>
      </div>

      <div className={styles['mobile-menu']}>
        <div className={styles.logo}>
          <NameLogo />     
        </div>
       
        {toggleMenu ? 
          <RiCloseLine className={styles['closed-icon']} onClick={() => setToggleMenu(false)} />
          :
          <RiMenu3Line className={styles['line-icon']} onClick={() => setToggleMenu(true)} />
        }  
      </div>
      
      <div className={`${styles['mobile-menu-container']} ${toggleMenu ? styles.active : ""}`}>
        {toggleMenu && (
          <>  
            <div className={styles['mobile-menu-links']}>
              <Menu onLinkClick={handleLinkClick} />
            </div>  
            
            <div className={styles['mobile-menu-icons']}>
              <Icons />
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavigationBar