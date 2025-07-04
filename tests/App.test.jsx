import { render, screen } from "@testing-library/react";

import App from "../src/App.jsx";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App Component", () => {
  it('renders headline as "Hello lads!"', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it('changes the headline to "Good-bye lads!" on button click', async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", {
      name: "Click to change heading",
    });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch("Good-bye lads!");
  });
});
