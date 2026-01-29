import Card from "../Card";
import styles from "./Projects.module.css";

function Projects({ title }) {
  const projects = [
    {
      id: 1,
      title: "Project A",
      description:
        "This is a project made to learn the latest languages by building an app.",
    },

    {
      id: 2,
      title: "Project B",
      description:
        "This is a project made to learn the latest languages by building an app.",
    },

    {
      id: 3,
      title: "Project C",
      description:
        "This is a project made to learn the latest languages by building an app.",
    },
  ];

  return (
    <div className={styles.Projects}>
      <h3 className={styles.Title}>{title}</h3>
      <div className={styles.CardList}>
        {projects.map(function (project) {
          return (
            <Card title={project.title} description={project.description} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
