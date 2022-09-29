import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("Renders semua home", () => {
  render(<HomePage />);
  // mencari test tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  // mencari button tertentu
  // pastikan button kita memiliki role="button"
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Click Me");

  // klik tombol users list
  fireEvent.click(button);
  // mencari tombol tertentu
  // pada halaman yang muncul karena klik tombol
  // pastikan button kita memiliki role="button"
  const button2 = screen.getByRole("button");
  expect(button2).toBeInTheDocument();
  expect(button2).toHaveTextContent("Click Me");
});
