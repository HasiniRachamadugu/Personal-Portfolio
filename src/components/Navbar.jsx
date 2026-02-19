import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Portfolio</h2>

      <ul style={styles.menu}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 8%",
    position: "fixed",
    width: "100%",
    top: 0,
    background: "#0f0f0f",
    zIndex: 100,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  },

  menu: {
    display: "flex",
    gap: "18px",          
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "14px",     
    fontWeight: "500",
  },
};

export default Navbar;
