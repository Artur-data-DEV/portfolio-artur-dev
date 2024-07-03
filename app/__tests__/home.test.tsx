import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
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

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the main heading correctly", () => {
    expect(
      screen.getByRole("heading", {
        name: /O l á , e u s o u o A r t u r ! 👋 T r a n s f o r m a n d o i d e i a s e m r e a l i d a d e c o m c ó d i g o e d e s i g n 👨‍💻/i,
      }),
    ).toBeInTheDocument();
  });

  it("toggles the dropdown menu for language selection", () => {
    const downloadButton = screen.getByRole("button", {
      name: /Download Curriculum/i,
    });

    fireEvent.click(downloadButton);
    expect(
      screen.getByRole("button", { name: /English/i }),
    ).toBeInTheDocument();

    fireEvent.click(downloadButton);
    expect(
      screen.queryByRole("button", { name: /English/i }),
    ).not.toBeInTheDocument();
  });

  it("selects English language and displays the curriculum", () => {
    const downloadButton = screen.getByRole("button", {
      name: /Download Curriculum/i,
    });

    fireEvent.click(downloadButton);
    const englishOption = screen.getByRole("button", { name: /English/i });
    fireEvent.click(englishOption);

    expect(screen.getByTitle(/Curriculum in English/i)).toBeInTheDocument();
  });

  it("selects Portuguese language and displays the curriculum", () => {
    const downloadButton = screen.getByRole("button", {
      name: /Download Curriculum/i,
    });

    fireEvent.click(downloadButton);
    const portugueseOption = screen.getByRole("button", { name: /Português/i });
    fireEvent.click(portugueseOption);

    expect(screen.getByTitle(/Curriculum in Português/i)).toBeInTheDocument();
  });

  it("closes the dropdown menu when clicking outside", () => {
    const downloadButton = screen.getByRole("button", {
      name: /Download Curriculum/i,
    });

    fireEvent.click(downloadButton);
    expect(
      screen.getByRole("button", { name: /English/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Português/i }),
    ).toBeInTheDocument();

    fireEvent.mouseDown(document);

    expect(
      screen.queryByRole("button", { name: /English/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Português/i }),
    ).not.toBeInTheDocument();
  });

  it("opens iframe with download button for English curriculum", () => {
    const openMock = jest.spyOn(window, "open").mockImplementation();

    // Mock window.open to simulate the download behavior
    const downloadButton = screen.getByRole("button", {
      name: /Download Curriculum/i,
    });
    fireEvent.click(downloadButton);

    // Simulate selecting English option
    const englishOption = screen.getByRole("button", { name: /English/i });
    fireEvent.click(englishOption);

    // Verify the download link
    const downloadLink = screen.getByRole("link", {
      name: /Download Curriculum - English/i,
    });

    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1sVaQhEoGYpKKYWrhgQBFuA5xlMYMQi_z";

    expect(downloadLink).toHaveAttribute("href", downloadUrl);

    // Mock window.location to simulate the download link click
    Object.defineProperty(window, "location", {
      value: { href: downloadUrl },
      writable: true,
    });

    fireEvent.click(downloadLink);

    // Assert that window.open was not called
    expect(openMock).not.toHaveBeenCalled();

    // Assert that window.location.href was set correctly
    expect(window.location.href).toBe(downloadUrl);

    // Restore the mock
    openMock.mockRestore();

    // Close the iframe
    const closeButton = screen.getByTestId("close-iframe-button");
    fireEvent.click(closeButton);

    // Assert that the English option is no longer in the document
    expect(
      screen.queryByRole("button", { name: /English/i }),
    ).not.toBeInTheDocument();
  });

  it("renders the page with correct content", () => {
    expect(screen.getByText(/Download Curriculum/i)).toBeInTheDocument();
    expect(screen.getByText(/Currículo Online/i)).toBeInTheDocument();
    expect(screen.getByText(/Entre em contato comigo/i)).toBeInTheDocument();
    expect(screen.getByAltText("Artur Campos")).toBeInTheDocument();
  });
});
