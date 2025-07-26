import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

test("HomePage", () => {
  render(<Page />);
  const welcomeText = screen.getByText("Welcome to Fluxx Lab");
  expect(welcomeText).toBeInTheDocument();
});
