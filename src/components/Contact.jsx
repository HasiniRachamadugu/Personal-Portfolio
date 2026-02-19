import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>

      <div style={styles.info}>
        <p>
          📧 Email:
          <a
            href="mailto:pnvhasini@gmail.com"
            style={styles.link}
          >
            {" "}pnvhasini@gmail.com
          </a>
        </p>

        <p>
          📞 Phone:
          <a
            href="tel:+919948362628"
            style={styles.link}
          >
            {" "}+91 9948362628
          </a>
        </p>

        <p>📍 Bhimavaram, Andhra Pradesh</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginTop: "40px",
    marginBottom: "80px",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "25px",
  },

  info: {
    color: "#b3b3b3",
    fontSize: "16px",
    lineHeight: "2",
  },

  link: {
    color: "#ffffff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Contact;
