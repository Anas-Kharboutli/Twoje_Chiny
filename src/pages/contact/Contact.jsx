import styles from "./contact.module.css"
import { FaWhatsappSquare, FaViber  } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  return (
    <section className={styles.mainContactSection}>
  <div className={styles.contactsContainer}>
<h2>Contact us @</h2>
 <div className={styles.contacts}>
<FaWhatsappSquare className={styles.whatsappIcon}/>
<span>0999999999</span>
<FaViber className={styles.viberIcon}/>
<span>09999999</span>
<IoLogoWechat className={styles.wechatIcon}/>
<span>xxxxx</span>
<MdEmail className={styles.emailIcon}/>
<span>info@twojechiny.com</span>
      </div>
  </div>
     
      
<div className={styles.contactFormContainer}>
  <ContactForm />
</div>

    
    </section>
  )
}

export default Contact
