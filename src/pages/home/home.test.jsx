import { describe, expect, test } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import Home from "./home.jsx";

describe("Home Page", () => {
  test("renders hero section", async () => {
    const { getByText, getByAltText } = await render(<Home />);
    await expect
      .element(getByText("Valdemar Andreas Larsen"))
      .toBeInTheDocument();
    await expect
      .element(getByAltText("Valdemar Andreas Larsen"))
      .toBeInTheDocument();
  });

  test("test if link opens when clicking on the project cards", async () => {
    const { container } = await render(<Home />);
    const projectLink = container.querySelector(
      //Any link to any of the projects
      'a[href="https://headliner-rho.vercel.app/"]'
    );

    expect(projectLink).not.toBeNull();
    await expect.element(projectLink).toBeInTheDocument();
  });

  test("clicking project card opens link in new tab", async () => {
    const { container } = await render(<Home />);

    await new Promise((resolve) => setTimeout(resolve, 420)); // Wait for render/animations
    const projectLink = container.querySelector(".project-card__link--primary");

    expect(projectLink).not.toBeNull();

    let clickedHref = null;
    projectLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent actual navigation
      clickedHref = e.currentTarget.href;
    });

    await projectLink.click();

    expect(clickedHref).toBe("https://headliner-rho.vercel.app/");
  });
});