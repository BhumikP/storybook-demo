import React from "react";
import PropTypes from "prop-types";

function Title({ label, color, backgroundColor, padding, handleClick }) {
  return (
    <h1 style={{ color, backgroundColor, padding }} onClick={handleClick}>
      {label}
    </h1>
  );
}

Title.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
};

Title.defaultTypes = {
  label: "title",
  color: "black",
  backgroundColor: "white",
  padding: "5px",
};

export default Title;
