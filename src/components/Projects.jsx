import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={{ scrollMarginTop: "90px" }}>
      <h2>Projects</h2>

      <div style={styles.container}>
        {/* PROJECT 1 */}
        <div style={styles.card}>
          <a
            href="https://github.com/HasiniRachamadugu/ATM-Simulation"
            target="_blank"
            rel="noreferrer"
            style={styles.githubBtn}
            title="View on GitHub"
          >
            GitHub
          </a>

          <h3>ATM Simulation System</h3>
          <p>Java | Spring Boot | MySQL</p>
        </div>

        {/* PROJECT 2 */}
        <div style={styles.card}>
          <a
            href="https://github.com/HasiniRachamadugu/GuideU"
            target="_blank"
            rel="noreferrer"
            style={styles.githubBtn}
            title="View on GitHub"
          >
            GitHub
          </a>

          <h3>GuideU – Student Mentorship Platform</h3>
          <p>React | Firebase</p>
        </div>

        {/* PROJECT 3 */}
        <div style={styles.card}>
          <a
            href="https://github.com/HasiniRachamadugu/Personal-Portfolio"
            target="_blank"
            rel="noreferrer"
            style={styles.githubBtn}
          >
            GitHub
          </a>

          <h3>Personal Portfolio Website</h3>
          <p>React | JavaScript | CSS</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    position: "relative",     
    padding: "20px",
    background: "#1a1a1a",
    borderRadius: "12px",
  },

  githubBtn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    textDecoration: "none",
    color: "#ffffff",
    border: "1px solid #ffffff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
  },
};

export default Projects;
