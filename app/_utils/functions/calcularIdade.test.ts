import { calcularIdade } from "./calcularIdade";
import { advanceTo, clear } from "jest-date-mock";

describe("calcularIdade", () => {
  beforeEach(() => {
    advanceTo(new Date(2021, 5, 16)); // Define a data de hoje para 2021-06-16
  });

  afterEach(() => {
    clear(); // Limpa o mock da função Date após cada teste
  });

  it("calculates age correctly when current date is after birth date", () => {
    // Arrange
    const birthDate = new Date(1990, 4, 15).toISOString(); // Data de nascimento em 1990-05-15

    // Act
    const age = calcularIdade(birthDate);

    // Assert
    expect(age).toBe(31); // Idade esperada é 31
  });

  it("returns 0 when birth date is today", () => {
    // Arrange
    const birthDate = new Date(2021, 5, 16).toISOString(); // Data de nascimento é hoje

    // Act
    const age = calcularIdade(birthDate);

    // Assert
    expect(age).toBe(0); // Idade esperada é 0
  });

  it("returns negative value when birth date is in the future", () => {
    // Arrange
    const birthDate = new Date(2022, 5, 16).toISOString(); // Data de nascimento é no futuro

    // Act
    const age = calcularIdade(birthDate);

    // Assert
    expect(age).toBeLessThan(0); // Idade esperada é um valor negativo
  });

  it("throws error when birth date is invalid", () => {
    // Arrange
    const birthDate = "invalid date"; // Data de nascimento inválida

    // Act & Assert
    expect(() => calcularIdade(birthDate)).toThrow(
      "Data de nascimento inválida",
    );
  });
});
