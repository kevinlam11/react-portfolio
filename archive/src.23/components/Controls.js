import React from "react";

const Controls = ({
  loggedIn,
  setLoggedIn,
  label,
  icon,
  message,
  btnLabel,
}) => {
  return (
    <>
      <span role="img" aria-label={label}>
        {icon}
      </span>
      <h3>You are {message}</h3>
      <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
        Log {btnLabel}
      </button>
    </>
  );
};

export default Controls;
