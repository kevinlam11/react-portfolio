import React from "react";
import Controls from "./Controls";
import data from "../utils/data";

export default function Welcome(props) {
  const tada = { ...props, ...data.tada };
  const stopsign = { ...props, ...data.stopsign };

  return props.loggedIn ? <Controls {...tada} /> : <Controls {...stopsign} />;
}
