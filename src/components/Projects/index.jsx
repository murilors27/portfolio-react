import Card from "../Card";
import styles from "./Projects.module.css";

function Projects({ title }) {
  return (
    <div className={styles.Projects}>
      <h3 className={styles.Title}>{title}</h3>
      <Card
        title={"Project A"}
        description={
          "This is a project made to learn the latest languages by building an app."
        }
      />
    </div>
  );
}

export default Projects;
