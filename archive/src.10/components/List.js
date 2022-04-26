import React from "react";
import ListItem from "./ListItem";

const isPurchased = (o) => o.purchased;

const renderItem = (item) => <ListItem {...item} />;

function List(props) {
  return (
    <>
      <h1>Purchased Groceries</h1>
      <ul className="list-group">
        {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
        {props.groceries.filter(isPurchased).map(renderItem)}
      </ul>
    </>
  );
}

export default List;
