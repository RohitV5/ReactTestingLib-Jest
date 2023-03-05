import React from "react";

type Props = {
  name?: string;
};

function Greet({ name }: Props) {
  if (name === "Rohit") {
    return <div>Hello Master</div>;
  }else if(name === "Loki"){
    return <div>Hello Master 2</div>; //not covered in test for checking covergae not 100%
  }
  return <div>Hello {name ? name : "Guest"}</div>;
}

export default Greet;
