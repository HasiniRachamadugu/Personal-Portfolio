import React from "react";

const Skills = () => {
  const skills = [
    "C",
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "MySQL",
    "Git & GitHub",
    "HTML",
    "CSS",
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>

      <div style={styles.row}>
        {skills.map((skill) => (
          <div key={skill} style={styles.box}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginTop: "0px",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "30px",
  },

  /* ONE ROW */
  row: {
  display: "flex",
  flexWrap: "wrap",          // ✅ allows next row
  gap: "20px",
  alignItems: "center",
},


  /* BIG RECTANGLE BOX */
  box: {
  minWidth: "160px",
  height: "70px",
  background: "#1a1a1a",
  border: "1px solid #2a2a2a",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "500",
  whiteSpace: "nowrap",
},

};

export default Skills;
