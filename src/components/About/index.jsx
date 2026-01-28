import styles from "./About.module.css";
import profileImg from "../../assets/profile.jpg";

function About({ title }) {
  const skills = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "I'm a front-end developer with experience in building responsiveand optimized sites",
    },

    {
      id: 2,
      title: "Backend Developer",
      description:
        "I have experience developing fast and optimised back-end systems and APIs",
    },

    {
      id: 3,
      title: "UI Designer",
      description:
        "I have designed multiple landing pages and have created design systems as well",
    },
  ];

  return (
    <div className={styles.AboutSection}>
      <div className={styles.IlustrativeSection}>
        <h3 className={styles.Title}>{title}</h3>
        <img src={profileImg} alt="" className={styles.Img} />
      </div>

      <div className={styles.List}>
        {skills.map(function (skill) {
          return (
            <dl key={skill.id}>
              <dt className={styles.ItemTitle}>{skill.title}</dt>
              <dd className={styles.ItemDescription}>{skill.description}</dd>
            </dl>
          );
        })}
      </div>
    </div>
  );
}

export default About;
