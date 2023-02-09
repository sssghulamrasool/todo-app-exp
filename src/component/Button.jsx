import React from "react";

const Button = ({ cls, name, action }) => {
  return (
    <button className={`${cls} custom-btn`} onClick={(e) => action(e)}>
      {name}
    </button>
  );
};

export default Button;
