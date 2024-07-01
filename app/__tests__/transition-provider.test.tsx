import { render } from "@testing-library/react";
import TransitionProvider from "@/providers/transition-provider";
import Loading from "@/app/loading";
import { usePathname } from "next/navigation";
import { IntersectionObserverMockInstance } from "../__mocks__/intersectionObserverMock";
import React from "react";
import HireMe from "../_components/animated/hire-me"; // Ensure this import is correct

global.IntersectionObserver = IntersectionObserverMockInstance;

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("../_components/animated/hire-me", () => ({
  __esModule: true,
  default: jest.fn(() => <div>HireMe Mock</div>),
}));

jest.mock("../../app/loading", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../_components/customLayout", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => children),
}));

jest.mock("../../providers/theme-provider", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => children),
}));

// Spy on console.error to suppress warning messages
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("TransitionProvider component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Loading when not ready", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<TransitionProvider>Test</TransitionProvider>);
    expect(Loading).toHaveBeenCalled();
  });

  it("should scroll to top if pathName is '/about'", () => {
    const scrollToMock = jest.fn();
    Object.defineProperty(window, "scrollTo", { value: scrollToMock });

    (usePathname as jest.Mock).mockReturnValue("/about");
    render(<TransitionProvider>Test</TransitionProvider>);
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });

  it("should render children when ready", () => {
    const useEffectMock = jest.spyOn(React, "useEffect");
    useEffectMock.mockImplementationOnce((effect) => effect());
    (usePathname as jest.Mock).mockReturnValue("/");
    const children = <div>Test Children</div>;
    const { getByText } = render(
      <TransitionProvider>{children}</TransitionProvider>,
    );
    expect(getByText("Test Children")).toBeInTheDocument();
  });

  it("should render HireMe component when ready", () => {
    const useEffectMock = jest.spyOn(React, "useEffect");
    useEffectMock.mockImplementationOnce((effect) => effect());
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<TransitionProvider>Test</TransitionProvider>);
    expect(HireMe).toHaveBeenCalled();
  });
});
