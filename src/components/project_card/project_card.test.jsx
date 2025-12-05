import { describe, expect, test } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import ProjectCard from "./project_card";

describe("ProjectCard Component", () => {
  test("renders project card with all props", async () => {
    const imgSrc = "test-image.jpg";
    const title = "Test Project";
    const tags = ["React", "SCSS"];
    const description = "This is a test project.";
    const repoLink = "https://github.com/test/test-project";
    const liveLink = "https://test-project.com";

    const { getByText, getByRole } = await render(
      <ProjectCard
        imgSrc={imgSrc}
        title={title}
        tags={tags}
        description={description}
        repoLink={repoLink}
        liveLink={liveLink}
      />
    );
    await expect
      .element(getByRole("img", { name: title }))
      .toHaveAttribute("src", imgSrc);
    await expect
      .element(getByRole("img", { name: title }))
      .toHaveAttribute("alt", title);
    await expect
      .element(getByRole("heading", { name: title }))
      .toBeInTheDocument();
    await expect.element(getByText("React")).toBeInTheDocument();
    await expect.element(getByText("SCSS")).toBeInTheDocument();
    await expect.element(getByText(description)).toBeInTheDocument();
    await expect.element(getByText("Repository")).toBeInTheDocument();
    await expect.element(getByText("Live Demo")).toBeInTheDocument();
  });

  test("renders project card without optional links", async () => {
    const imgSrc = "test-image.jpg";
    const title = "Test Project";
    const tags = ["React", "SCSS"];
    const description = "This is a test project.";

    const { getByText, getByRole, container } = await render(
      <ProjectCard
        imgSrc={imgSrc}
        title={title}
        tags={tags}
        description={description}
      />
    );

    await expect
      .element(getByRole("img", { name: title }))
      .toHaveAttribute("src", imgSrc);
    await expect
      .element(getByRole("img", { name: title }))
      .toHaveAttribute("alt", title);
    await expect
      .element(getByRole("heading", { name: title }))
      .toBeInTheDocument();
    await expect.element(getByText("React")).toBeInTheDocument();
    await expect.element(getByText("SCSS")).toBeInTheDocument();
    await expect.element(getByText(description)).toBeInTheDocument();

    const link = container.querySelector(".project-card__link");

    await expect(link).toBeNull();
  });
});
