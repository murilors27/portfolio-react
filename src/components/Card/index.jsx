import styles from "./Card.module.css";
import codingImg from "../../assets/coding.jpg";

function Card({ title, description }) {
  const technologies = [
    {id: 1, title: "React"},
    {id: 2, title: "Node"},
    {id: 3, title: "Express"}
  ]

  return (
    <div className={styles.Card}>
      <img src={codingImg} alt="" className={styles.Image} />
      <div className={styles.Content}>
        <h4 className={styles.Title}>{title}</h4>
        <p className={styles.Description}>{description}</p>
      </div>
      <ul className={styles.TechList} key={technologies.id}>
        {technologies.map(function (technology) {
          return (
            <li className={styles.ListItem}>{technology.title}</li>
          )
        })}
      </ul>
      <div className={styles.Buttons}>
        <button className={styles.Button}>Demo</button>
        <button className={styles.Button}>Source</button>
      </div>
    </div>
  );
}

export default Card;
