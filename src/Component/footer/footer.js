import React from "react";

let yearCurrent = new Date().getFullYear();

function footer() {
  return (
    <div className="footer">
      <p> Copyright ⓒ {yearCurrent} </p>
    </div>
  );
}

export default footer;
