import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div style={styles.contactBox}>
        <div style={styles.item}>
          <span style={styles.icon}>📧</span>
          <a
  href="mailto:pnvhasini@gmail.com"
  style={styles.link}
  onMouseOver={(e) => (e.target.style.textDecoration = "none")}
  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
>
  pnvhasini@gmail.com
</a>

        </div>

        <div style={styles.item}>
          <span style={styles.icon}>📞</span>
          <a
            href="tel:+919948362628"
            style={styles.link}
          >
            +91 99483 62628
          </a>
        </div>

        <div style={styles.item}>
          <span style={styles.icon}>📍</span>
          <span>Bhimavaram, Andhra Pradesh</span>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contactBox: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    maxWidth: "420px",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "15px",
    color: "#cccccc",
  },

  icon: {
    fontSize: "16px",
  },

  link: {
  color: "#ffffff",
  textDecoration: "none",   
},

};

export default Contact;
