import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/Button";

it("renders button correctly", () => {
  render(<Button text="Click me!" />);
  const button = screen.getByText("Click me!");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Click me!");

  cleanup();

  render(<Button text="Sign up" />);
  const button2 = screen.getByText("Sign up");

  expect(button2).toBeInTheDocument();
  expect(button2).toHaveTextContent("Sign up");
});
