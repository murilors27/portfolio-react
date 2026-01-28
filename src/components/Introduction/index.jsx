import styles from './Introduction.module.css'
import profileImg from '../../assets/profile.jpg'

function Introduction({ title, description, buttonContent }) {
  return (
    <div className={styles.IntroductionSection}>
      <div className={styles.ContentSection}>
        <h2 className={styles.Title}>{title}</h2>
        <p className={styles.Description}>{description}</p>
        <button className={styles.Button}>{buttonContent}</button>
      </div>
      <img src={profileImg} alt="Profile Picture" className={styles.ProfileImg} />
    </div>
  );
}

export default Introduction;
