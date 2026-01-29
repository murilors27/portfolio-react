import styles from "./Footer.module.css";
import emailIcon from "../../assets/emailIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Content}>
        <h3 className={styles.Title}>Contact</h3>
        <p className={styles.Text}>Feel free to reach out!</p>
      </div>
      <div>
        <ul className={styles.LinkList}>
          <li className={styles.ListItem}>
            <a href="mailto:murilorsantos27@gmail.com">
              <img src={emailIcon} alt="" className={styles.ItemIcon} />
            </a>
          </li>
          <li className={styles.ListItem}>
            <a href="https://www.linkedin.com/in/murilors27/">
              <img src={linkedinIcon} alt="" className={styles.ItemIcon} />
            </a>
          </li>
          <li className={styles.ListItem}>
            <a href="https://github.com/murilors27">
              <img src={githubIcon} alt="" className={styles.ItemIcon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
