import { render, screen } from "@testing-library/react";

import React from "react";
import Greet from "../components/greet/greet";
//it and test are both same
//Individual Test
it("Greet renders correctly master", () => {
  render(<Greet name={"Rohit"} />);
  const a = screen.getByText(/hello Master/i);
  expect(a).toBeInTheDocument();
});

it("Greet renders correctly", () => {
  render(<Greet name={"Boing"} />);
  const a = screen.getByText(/hello Boing/i);
  expect(a).toBeInTheDocument();
});

//Grouping tests
describe("Way to test grouped test", () => {
  it("Greet renders correctly", () => {
    render(<Greet />);
    const a = screen.getByText(/hello/i);
    expect(a).toBeInTheDocument();
  });

  test("Greet renders correctly with name", () => {
    render(<Greet name={"Rohit"} />);
    const a = screen.getByText(/hello Master/i);
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
      const a = screen.getByText(/hello Master/i);
      expect(a).toBeInTheDocument();
    });
  });
});
