import React from "react";

const ListItem = (props) => {
  return (
    <li key={props.id} className="list-group-item">
      {props.name}
    </li>
  );
};

export default ListItem;
