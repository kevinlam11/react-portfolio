import React from "react";
// Here we import the Header.css file to grant access to some additional classNames
import "../styles/Header.css";

// TODO: Create a styles object called "styles"
const styles = {
  header: {
  backgroundColor: 'red',
}, 
h1: {
  fontSize: '100px'
}};
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
