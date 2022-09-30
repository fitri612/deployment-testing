import { render, screen, waitFor } from "@testing-library/react";
import CommentPage from "./CommentPage";

test("Renders semua comment", async () => {
  render(<CommentPage />);

  const comment = await waitFor(
    () => screen.getByText(/Ini adalah comment/i),
    { timeout: 5000 }
  )
  expect(comment).toBeInTheDocument();
});
