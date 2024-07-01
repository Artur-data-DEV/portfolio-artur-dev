import { render } from "@testing-library/react";
import RootLayout, { metadata } from "@/app/layout";
import CustomLayout from "@/app/_components/customLayout";
import TransitionProvider from "@/providers/transition-provider";
import ThemeProvider from "@/providers/theme-provider";

console.error = jest.fn();

// Mock para o componente CustomLayout
jest.mock("../_components/customLayout", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => children),
}));

// Mock para o TransitionProvider
jest.mock("../../providers/transition-provider", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => children),
}));

// Mock para o ThemeProvider
jest.mock("../../providers/theme-provider", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => children),
}));

describe("RootLayout component", () => {
  beforeEach(() => {
    render(<RootLayout>Test</RootLayout>);
  });

  it("should render essential HTML elements", () => {
    expect(document.querySelector("html")).toBeInTheDocument();
    expect(document.querySelector("head")).toBeInTheDocument();
    expect(document.querySelector("body")).toBeInTheDocument();
  });

  it("should set correct metadata", () => {
    expect(metadata.title).toBe("Artur | Fullstack Dev");
    expect(metadata.description).toBe(
      "Artur Campos, um desenvolvedor web fullstack apaixonado por inovação e novos desafios de tecnologia!",
    );
  });

  it("should render ThemeProvider with correct props", () => {
    expect(ThemeProvider).toHaveBeenCalledWith(
      expect.objectContaining({
        defaultTheme: "light",
        enableSystem: true,
        enableColorScheme: true,
        themes: [
          "light",
          "dark-classic",
          "tangerine",
          "dark-tangerine",
          "mint",
          "dark-mint",
        ],
      }),
      {},
    );
  });

  it("should render CustomLayout component", () => {
    expect(CustomLayout).toHaveBeenCalled();
  });

  it("should render TransitionProvider", () => {
    expect(TransitionProvider).toHaveBeenCalled();
  });
});
