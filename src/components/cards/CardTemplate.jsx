import styles from "./cardTemplate.module.css";

const CardTemplate = ({imgURL, tripDuration, placeName, country, placeDescription, tripPrice}) => {
  return (
    <div className={styles.card}>
      <figure>
        <img src={imgURL} alt={country}/>
        <figcaption className={styles.caption}>
          <main className={styles.main}>
            <p className={styles.small}>{tripDuration}</p>
            <h3>{placeName} <em>{country}</em></h3>
            <p>{placeDescription}</p>
          </main>

          <footer className={styles.footer}>
            <div>
              <p className={styles.small}>From</p>
              <p className={styles.price}>{tripPrice}</p>
            </div>
            <img src="/src/assets/destinations-images/icon-arrow-right-color.svg" 
			className={styles.arrowIcon}
			alt="Icon"/>
          </footer>
        </figcaption>
      </figure>
    </div>
  )
}

export default CardTemplate