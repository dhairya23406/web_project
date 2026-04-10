import React, { useState } from "react";
import PropTypes from "prop-types";

const Student = ({ name, course }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="container">
      <div className="student-card">
        <h2>{name}</h2>
        <p><strong>Course:</strong> {course}</p>
        <button onClick={() => setLikes(likes + 1)}>
          👍 Like ({likes})
        </button>
      </div>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
};

export default Student;