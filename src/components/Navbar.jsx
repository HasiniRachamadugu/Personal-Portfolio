import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={{ cursor: "pointer" }}>Portfolio</h2>

      <ul style={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 10%",
    position: "fixed",
    width: "100%",
    top: 0,
    background: "#0f0f0f",
    zIndex: 100,
  },
  menu: {
    display: "flex",
    gap: "30px",
    listStyle: "none",
  },
};

export default Navbar;
