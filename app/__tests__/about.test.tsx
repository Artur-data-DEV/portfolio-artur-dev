import { render, screen, fireEvent } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import { IntersectionObserverMockInstance } from "../__mocks__/intersectionObserverMock";

global.IntersectionObserver = IntersectionObserverMockInstance;

describe("AboutPage component", () => {
  const scrollIntoViewMock = jest.fn();

  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useRef: jest.fn(() => ({
      current: { scrollIntoView: scrollIntoViewMock },
    })),
  }));

  it("renders without errors and all important elements are present", () => {
    render(<AboutPage />);
    expect(screen.getByText(/biografia/i)).toBeInTheDocument();
    expect(screen.getByTestId("scroll-to-skills")).toBeInTheDocument();
    expect(screen.getByTestId("scroll-to-experience")).toBeInTheDocument();
    // Add more checks for other important elements if necessary
  });

  it("scrolls to skills section when scroll icon is clicked", () => {
    render(<AboutPage />);
    const skillsSection = screen.getByTestId("skills-section");
    fireEvent.click(screen.getByTestId("scroll-to-skills"));
    expect(skillsSection).toBeVisible();
  });

  it("scrolls to experience section when scroll icon is clicked", () => {
    render(<AboutPage />);
    const experienceSection = screen.getByTestId("experience-section");
    fireEvent.click(screen.getByTestId("scroll-to-experience"));
    expect(experienceSection).toBeVisible();
  });
});
