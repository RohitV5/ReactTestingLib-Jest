import { render,screen } from "@testing-library/react";
import Greet from "./greet";
import React from "react";

test("Greet renders correctly", () => {
  render(<Greet name={"Rohit"}/>);
  const a = screen.getByText(/hello Rohit/i);
  expect(a).toBeInTheDocument();
});
