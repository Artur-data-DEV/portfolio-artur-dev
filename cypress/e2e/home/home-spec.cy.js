describe("Teste de redirecionamento para enviar e-mail", () => {
  it("Verifica o redirecionamento para enviar e-mail", () => {
    // Visita a URL inicial da sua aplicação
    cy.visit("http://localhost:3000"); // Substitua pela URL correta da sua aplicação Next.js

    // Verifica se o link para enviar e-mail está presente e possui o atributo href correto
    cy.get('[data-cy="get-in-touch"]').should(
      "have.attr",
      "href",
      "mailto:arturcamposba99@gmail.com",
    );
  });
});

describe("Teste de download de Currículo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Replace with the correct URL of your Next.js application
    cy.get('[data-cy="download-curriculum-dropdown"]').click();
  });

  const downloadFile = (language, expectedFileName) => {
    cy.get(`[data-cy="dropdown-${language}-button"]`).click();
    cy.get('[data-cy="download-curriculum"]').click();
    cy.readFile(`cypress/downloads/${expectedFileName}`, {
      timeout: 10000,
    }).should("exist");
  };

  it("Verifica o download de um arquivo PDF em inglês", () => {
    downloadFile("english", "Artur-CV-Eng (1).pdf");
  });

  it("Verifica o download de um arquivo PDF em português", () => {
    downloadFile("portuguese", "Artur-CV-PtBr (1).pdf");
  });
});

describe("Teste de redirecionamento para site do Curriculo Online", () => {
  it("Verifica o redirecionamento para o site do Curriculo Online", () => {
    // Visita a URL inicial da sua aplicação
    cy.visit("http://localhost:3000"); // Substitua pela URL correta da sua aplicação Next.js

    // Intercepta a requisição para a URL de destino
    cy.intercept("GET", "https://curriculum-artur.vercel.app/").as("redirect");

    // Clica no link que redireciona para o currículo online
    cy.get('[data-cy="curriculum-online-site"]')
      .should("have.attr", "href", "https://curriculum-artur.vercel.app/")
      .invoke("removeAttr", "target") // Opcional: remove 'target' para abrir na mesma aba
      .click();

    // Espera pela interceptação da requisição e verifica o status
    cy.wait("@redirect").its("response.statusCode").should("eq", 200);
  });
  it("Verifica se o download do curriculo formato SnapshotPDF é realizado corretamente no site externo", () => {
    // Visita a URL externa
    cy.visit("https://curriculum-artur.vercel.app/");
    const downloadButton = cy.get("span").contains("Download Curriculum");
    downloadButton.click();
    cy.readFile(`cypress/downloads/Artur_Dev-CV.pdf`, {
      timeout: 10000,
    }).should("exist");
  });
});
