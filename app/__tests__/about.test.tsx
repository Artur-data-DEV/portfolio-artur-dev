import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import { IntersectionObserverMockInstance } from "../__mocks__/intersectionObserverMock";
import fetchMock from "jest-mock-fetch";

// Definindo o mock global para IntersectionObserver
global.IntersectionObserver = IntersectionObserverMockInstance;

describe("AboutPage component", () => {
  // Limpa o mock antes de cada teste
  afterEach(() => {
    fetchMock.reset();
  });

  it("renders without errors and all important elements are present", async () => {
    render(<AboutPage />);

    // Verifica se os elementos importantes estão presentes
    await waitFor(() => {
      expect(screen.getByText(/biografia/i)).toBeInTheDocument();
      expect(screen.getByTestId("scroll-to-skills")).toBeInTheDocument();
      expect(screen.getByTestId("scroll-to-experience")).toBeInTheDocument();
    });
  });

  it("scrolls to skills section when scroll icon is clicked", async () => {
    render(<AboutPage />);

    // Simula o clique no ícone de scroll para habilidades
    fireEvent.click(screen.getByTestId("scroll-to-skills"));

    // Verifica se a seção de habilidades está visível após o clique
    await waitFor(() => {
      expect(screen.getByTestId("skills-section")).toBeVisible();
    });
  });

  it("scrolls to experience section when scroll icon is clicked", async () => {
    render(<AboutPage />);

    // Simula o clique no ícone de scroll para experiência
    fireEvent.click(screen.getByTestId("scroll-to-experience"));

    // Verifica se a seção de experiência está visível após o clique
    await waitFor(() => {
      expect(screen.getByTestId("experience-section")).toBeVisible();
    });
  });
});
