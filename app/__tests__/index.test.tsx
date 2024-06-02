import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mock dependencies
jest.mock("@uidotdev/usehooks", () => ({
  useWindowSize: jest.fn().mockReturnValue({ width: 1024, height: 768 }),
}));

jest.mock("../_components/animated/hire-me", () => ({
  __esModule: true,
  default: jest.fn(), // Mock HireMe as a Jest mock function
}));

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
    // Testar se o layout muda para diferentes tamanhos de tela
    // Aqui, podemos simular um tamanho de tela menor e verificar se os elementos ainda são visíveis
    // render(<Home />);
    // window.innerWidth = 500;
    // window.innerHeight = 500;
    // expect(screen.getByText("Algum elemento")).toBeInTheDocument();
  });

  it("should handle button click events correctly", () => {
    // Testar se o comportamento dos eventos de clique do botão está correto
    // Aqui, podemos simular um clique em um botão e verificar se as ações esperadas são acionadas
    // render(<Home />);
    // const button = screen.getByText("Enviar");
    // fireEvent.click(button);
    // expect(acaoEsperada).toHaveBeenCalled();
  });

  // Adicionar mais testes conforme necessário
});
