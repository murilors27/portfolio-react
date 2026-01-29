import styles from "./Card.module.css";
import codingImg from "../../assets/coding.jpg";

function Card({ title, description }) {
  return (
    <div className={styles.Card}>
      <img src={codingImg} alt="" className={styles.Image} />
      <div className={styles.Content}>
        <h4 className={styles.Title}>{title}</h4>
        <p className={styles.Description}>{description}</p>
      </div>
      <ul className={styles.TechList}>
        <li className={styles.ListItem}>React</li>
        <li className={styles.ListItem}>Express</li>
        <li className={styles.ListItem}>Node</li>
      </ul>
      <div className={styles.Buttons}>
        <button className={styles.Button}>Demo</button>
        <button className={styles.Button}>Source</button>
      </div>
    </div>
  );
}

export default Card;
