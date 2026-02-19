import React from "react";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="hero" style={styles.hero}>
      
      {/* LEFT IMAGE */}
      <div className="hero-left" style={styles.left}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={styles.image}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="hero-right" style={styles.right}>
        <h1 style={styles.name}>
          Rachamadugu <br /> Hasini
        </h1>

        <p style={styles.text}>
          Second-year B.Tech Information Technology student passionate about
          Java, React, and full-stack development.
        </p>

        {/* BUTTONS */}
        <div style={styles.buttons}>
          <a href="#about" style={styles.primaryBtn}>
            Explore Now
          </a>

          <button
            onClick={() => window.open(resume, "_blank")}
            style={styles.secondaryBtn}
            onMouseOver={(e) => {
              e.target.style.background = "#ffffff";
              e.target.style.color = "#000000";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#ffffff";
            }}
          >
            View Resume
          </button>
        </div>

        {/* SOCIAL LINKS */}
        <div style={styles.socials}>
          <a
            href="https://github.com/HasiniRachamadugu"
            target="_blank"
            rel="noreferrer"
            style={styles.socialBtn}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hasini-rachamadugu-80673a321"
            target="_blank"
            rel="noreferrer"
            style={styles.socialBtn}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: "flex",
    height: "100vh",
  },

  /* IMAGE SIDE */
  left: {
    width: "50%",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
  },

  /* CONTENT SIDE */
  right: {
    width: "50%",
    padding: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  name: {
    fontSize: "56px",
    fontWeight: "700",
    lineHeight: "1.15",
    marginBottom: "20px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    maxWidth: "420px",
    marginTop: "10px",
    color: "#bdbdbd",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    margin: "25px 0",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "12px 22px",
    background: "#ffffff",
    color: "#000",
    fontSize: "14px",
    borderRadius: "4px",
    whiteSpace: "nowrap",
  },

  secondaryBtn: {
    padding: "12px 26px",
    border: "1px solid #ffffff",
    background: "transparent",
    color: "#ffffff",
    fontSize: "14px",
    borderRadius: "4px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  socials: {
    display: "flex",
    gap: "14px",
  },

  socialBtn: {
    padding: "8px 18px",
    border: "1px solid #2a2a2a",
    borderRadius: "20px",
    fontSize: "13px",
    color: "#b3b3b3",
  },
};

export default Hero;
