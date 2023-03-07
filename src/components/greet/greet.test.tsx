import { render, screen } from "@testing-library/react";
import Greet from "./greet";
import React from "react";

//Individual Test
test("Greet renders correctly", () => {
  render(<Greet name={"Rohit"} />);
  const a = screen.getByText(/hello Rohit/i);
  expect(a).toBeInTheDocument();
});

//Grouping tests
describe("Way to test grouped test", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const a = screen.getByText(/hello/i);
    expect(a).toBeInTheDocument();
  });

  test("Greet renders correctly with name", () => {
    render(<Greet name={"Rohit"} />);
    const a = screen.getByText(/hello Rohit/i);
    expect(a).toBeInTheDocument();
  });
});

//Grouping tests
describe("Way to test nested grouped test", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const a = screen.getByText(/hello/i);
    expect(a).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("Greet renders correctly with name", () => {
      render(<Greet name={"Rohit"} />);
      const a = screen.getByText(/hello Rohit/i);
      expect(a).toBeInTheDocument();
    });
  });
});
