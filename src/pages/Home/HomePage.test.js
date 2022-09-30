import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("Renders semua home", () => {
  render(<HomePage />);
  // mencari test tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  const title2 = screen.getByText(
    /To guarentee the quality. And to make sure the code is working as expected./i
  );
  expect(title2).toBeInTheDocument();

  // mencari button tertentu
  // pastikan button kita memiliki role="button"
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Click Me");
});
