import styles from "./faqs.module.css";

const FAQS = () => {
  
  return (
    <section className={styles["faqs-container"]}>
      <div className={styles['faqs-header']}>
        <h1>FAQ</h1>
        <p>FAQ - PYTANIA I ODPOWIEDZI</p>
      </div>

      <div className={`accordion ${styles.accordion}`} id="accordionExample">
        {/* Question 1 */}
        <div className={`accordion-item ${styles["accordion-item"]}`}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed ${styles["accordion-button"]}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="false" 
              aria-controls="collapseOne"
            >
              Jak zarezerwować miejsce na wyjazd?
            </button>
          </h2>
          <div 
            id="collapseOne" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Miejsce na wyjazd, możesz zarezerwować
              <ul>
                <li>
                  ONLINE - wypełnij formularz zgłoszeniowy, który znajduje się w planie każdego wyjazdu, na
                  samym dole strony. Po otrzymaniu formularza skontaktujemy się z Tobą i przekażemy Ci kolejne,
                  szczegółowe instrukcje.
                </li>
                <li>
                  TELEFONICZNIE lub WhatsApp tel. +8618126500691
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className={`accordion-item ${styles["accordion-item"]}`}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed ${styles["accordion-button"]}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo"
            >
              Kiedy należy zarezerwować miejsce na wyjazd?
            </button>
          </h2>
          <div 
            id="collapseTwo" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Możliwość zapisania się na wyjazd trwa do momentu dostępności wolnych miejsc. Czasami
                  miejsca kończą się już na miesiąc przed terminem wyjazdu.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className={`accordion-item ${styles["accordion-item"]}`}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed ${styles["accordion-button"]}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree"
            >
              W jaki sposób i kiedy dokonać płatności?
            </button>
          </h2>
          <div 
            id="collapseThree" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  TUTAJ NASZ OPIS
                </li>
                <li>
                  There will be more questions like here: https://amazingasia.pl/faq
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;