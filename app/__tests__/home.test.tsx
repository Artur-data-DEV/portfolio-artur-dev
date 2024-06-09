import { render, screen } from "@testing-library/react";
import Home from "../page";
import { IntersectionObserverMockInstance } from "../__mocks__/intersectionObserverMock";

// Mock dependencies
jest.mock("@uidotdev/usehooks", () => ({
  useWindowSize: jest.fn().mockReturnValue({ width: 1024, height: 768 }),
}));

jest.mock("../_components/animated/hire-me", () => ({
  __esModule: true,
  default: jest.fn(), // Mock HireMe as a Jest mock function
}));

global.IntersectionObserver = IntersectionObserverMockInstance;

describe("Home", () => {
  it("should render the page with correct content", () => {
    render(<Home />);

    // Check if the main greeting text is rendered
    expect(
      screen.getByRole("heading", { name: /Olá, eu sou o Artur! 👋/i }),
    ).toBeInTheDocument();

    // Check if the download curriculum button is rendered
    expect(screen.getByText("Download Curriculum")).toBeInTheDocument();

    // Check if the online curriculum button is rendered
    expect(screen.getByText("Currículo Online")).toBeInTheDocument();

    // Check if the contact button is rendered
    expect(screen.getByText("Entre em contato comigo")).toBeInTheDocument();

    // Test for the presence of an image
    expect(screen.getByAltText("Artur Campos")).toBeInTheDocument();
  });

  it("should display correct links for curriculum download and online", () => {
    render(<Home />);

    // Test for specific links
    expect(
      screen.getByRole("link", { name: /Download Curriculum/i }),
    ).toHaveAttribute("href", "/curriculum.pdf");
    expect(
      screen.getByRole("link", { name: /Currículo Online/i }),
    ).toHaveAttribute("href", "https://curriculum-sandy.vercel.app/");
  });

  it("should adjust layout for different screen sizes", () => {
    // To be implemented
    // Test if the layout adjusts for different screen sizes
    // Here, you can simulate a smaller screen size and verify if the elements are still visible
    // render(<Home />);
    // window.innerWidth = 500;
    // window.innerHeight = 500;
    // expect(screen.getByText("Some element")).toBeInTheDocument();
  });

  it("should handle button click events correctly", () => {
    // To be implemented
    // Test if the button click events behave correctly
    // Here, you can simulate a click on a button and verify if the expected actions are triggered
    // render(<Home />);
    // const button = screen.getByText("Send");
    // fireEvent.click(button);
    // expect(expectedAction).toHaveBeenCalled();
  });

  // Add more tests as needed
});
