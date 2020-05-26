import React from "react";

export default function VGrid(props) {
  const size = props.size
    .split(" ")
    .map((size) => "grid grid-cols-" + size + " gap-4")
    .join(" ");

  return <div className={`${size}`} {...props} />;
}
