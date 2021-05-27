import React from "react";

export default function Layout(props) {
  return (
    <div>
      <header>Header</header>
      {props.children}
    </div>
  );
}
