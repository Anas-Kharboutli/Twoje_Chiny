import styles from "./faqs.module.css";
import { faqData } from "../../utils/faqs_data";

const FAQS = () => {
  return (
    <section className={styles["faqs-container"]}>
      <div className={styles['faqs-header']}>
        <h1>FAQ</h1>
        <p>FAQ - PYTANIA I ODPOWIEDZI</p>
      </div>

      <div className={`accordion ${styles.accordion}`} id="accordionExample">
        {faqData.map((faq) => (
          <div key={faq.id} className={`accordion-item ${styles["accordion-item"]}`}>
            <h2 className="accordion-header">
              <button 
                className={`accordion-button collapsed ${styles["accordion-button"]}`}
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#${faq.id}`}
                aria-expanded="false" 
                aria-controls={faq.id}
              > 
                {faq.question}
              </button> 
            </h2>
            <div 
              id={faq.id}
              className="accordion-collapse collapse" 
              data-bs-parent="#accordionExample"
            >
              <div className={`${styles["accordion-body"]} accordion-body`}>
                {faq.answer.text && <p>{faq.answer.text}</p>}
                {faq.answer.list && (
                  <ul>
                    {faq.answer.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;