import React from "react";

export const Header = ({ headerText, firstChild, secondChild }) => {
  return (
    <header>
      <div>{headerText}</div>
      <div>{firstChild}</div>
      <div>{secondChild}</div>
    </header>
  );
};
