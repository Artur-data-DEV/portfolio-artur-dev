import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../_components/contact";

describe("ContactForm", () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  it("should display error messages for empty fields on submit", async () => {
    const submitButton = screen.getByRole("button", { name: "Enviar" });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("name-error")).toBeInTheDocument();
      expect(screen.getByTestId("email-error")).toBeInTheDocument();
      expect(screen.getByTestId("message-error")).toBeInTheDocument();
    });
  });

  it("should submit the form with valid data", async () => {
    const nameInput = screen.getByLabelText("Nome");
    const emailInput = screen.getByLabelText("E-mail");
    const messageInput = screen.getByLabelText("Mensagem");
    const submitButton = screen.getByRole("button", { name: "Enviar" });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, World!" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput).toHaveValue("John Doe");
      expect(emailInput).toHaveValue("john@example.com");
      expect(messageInput).toHaveValue("Hello, World!");
    });
  });
});
