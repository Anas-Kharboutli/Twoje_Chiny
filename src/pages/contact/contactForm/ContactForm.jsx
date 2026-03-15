import styles from "./contactForm.module.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const ContactForm = () => {

   const form = useRef();
  const [ show, setShow ] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1vy1kas', 'template_z8t9m6z', form.current, {
        publicKey: 'nrPa9G6CepMBNGJh2',
      })
      .then(
        () => {
          setShow(false);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    show? (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <h3>Or write to us...</h3>
        <div className={styles.formContainer}>

  <div className={`${styles["row mb-3"]} row mb-3 inputArea`}>
    <div className={`${styles["col-sm-10"]} col-sm-10`}>
      <input type="text" placeholder="Name" required
      className={`${styles["form-control"]} form-control`} name="name"/>
    </div>
  </div>
  
  <div className={`${styles["row mb-3"]} row mb-3 `}>
    <div className={`${styles["col-sm-10"]} col-sm-10`}>
      <input type="text" placeholder="Last Name" required
      className={`${styles["form-control"]} form-control`} name="lastName"/>
    </div>
  </div>

  <div className={`${styles["row mb-3"]} row mb-3`}>
    <div className={`${styles["col-sm-10"]} col-sm-10`}>
      <input type="text" placeholder="Phone Number" required
      className={`${styles["form-control"]} form-control`} name="phoneNumber"/>
    </div>
  </div>

  <div className={`${styles["row mb-3"]} row mb-3`}>
    <div className={`${styles["col-sm-10"]} col-sm-10`}>
      <input type="email" placeholder="Email" required
      className={`${styles["form-control"]} form-control`} name="email"/>
    </div>
  </div>

  {/* ✅ Moved inside formContainer */}
  <div className={`${styles["row mb-3"]} ${styles.textArea} row mb-3`}>
    <div className={`${styles["col-sm-10"]} col-sm-10`}>
      <textarea type="text" placeholder="Your message to us..." 
      cols={20} rows={3} required
      className={`${styles["form-control"]} form-control`} name="message"/>
    </div>
  </div>
  
  </div>

  <button type="submit" value="send" className="btn btn-primary">Send</button>
  
</form>

    ):(
      <div className='reply-message'>
        <h1>We've received your message!</h1>
        <h2>We'll be in touch with you shortly</h2>
      </div>  
    )
   
  )
}

export default ContactForm
