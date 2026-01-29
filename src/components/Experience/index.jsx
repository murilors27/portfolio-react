import styles from "./Experience.module.css";
import htmlIcon from "../../assets/htmlIcon.svg";
import cssIcon from "../../assets/cssIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import figmaIcon from "../../assets/figmaIcon.svg";
import nodeIcon from "../../assets/nodeIcon.svg";
import amazonIcon from "../../assets/amazonIcon.svg";
import googleIcon from "../../assets/googleIcon.svg";
import microsoftIcon from "../../assets/microsoftIcon.svg";

function Experience({ title }) {
  const skills = [
    { id: 1, image: htmlIcon, name: "HTML" },
    { id: 2, image: cssIcon, name: "CSS" },
    { id: 3, image: reactIcon, name: "React" },
    { id: 4, image: nodeIcon, name: "Node" },
    { id: 5, image: figmaIcon, name: "Figma" },
  ];

  const experiences = [
    {
      id: 1,
      image: googleIcon,
      position: "Software Engineer, Google",
      period: "Sept, 2022 - Present",
      responsibility: "Worked on Google Maps",
      achievements: "Reduced load times by 50%",
    },

    {
      id: 2,
      image: microsoftIcon,
      position: "UI Designer, Microsoft",
      period: "Aug, 2021 - Aug, 2022",
      responsibility: "Worked on Windows 11",
      achievements: "Designed the control panel",
    },

    {
      id: 3,
      image: amazonIcon,
      position: "SWE Intern, Amazon",
      period: "Apr, 2020 - Jun, 2020",
      responsibility: "Worked on component library",
      achievements: "Helped create UI components",
    },
  ];

  return (
    <div className={styles.ExperienceSection}>
      <h3 className={styles.Title}>{title}</h3>
      <div className={styles.ExperienceContent}>
        <div>
          <ul className={styles.ListSkills}>
            {skills.map(function (skill) {
              return (
                <li key={skill.id} className={styles.SkillsItem}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className={styles.SkillsIcon}
                  />
                  <p>{skill.name}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className={styles.ListExperiences}>
            {experiences.map(function (experience) {
              return (
                <li key={experience.id} className={styles.ExperiencesItem}>
                  <div>
                    <img src={experience.image} alt="" className={styles.ExperiencesIcon}/>
                  </div>

                  <div>
                    <h4 className={styles.ExperiencesTitle}>
                      {experience.position}
                    </h4>
                    <p className={styles.ExperiencesPeriod}>
                      {experience.period}
                    </p>
                    <ul className={styles.ExperiencesTopics}>
                      <li>{experience.responsibility}</li>
                      <li>{experience.achievements}</li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
