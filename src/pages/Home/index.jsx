import About from "../../components/About";
import Experience from "../../components/Experience";
import Introduction from "../../components/Introduction";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <body className={styles.HomeBody}>
      <nav className={styles.App}>
        <Navbar title={"Portfolio"} />
      </nav>
      <div className={styles.Content}>
        <Introduction
          title={"Hi, I'm Murilo"}
          description={
            "I’m a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you’d like to learn more!"
          }
          buttonContent={"Contact Me"}
        />

        <About title={"About"} />

        <Experience title={"Experience"} />
      </div>
    </body>
  );
}

export default Home;
