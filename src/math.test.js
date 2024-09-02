import { describe, expect, it } from "vitest";

import { add } from "./math";

describe("add()", () => {
  it("Deve somar todos os valores informados no array", () => {
    const resultado = add([1, 2, 3]);
    expect(resultado).toBe(6);
  });

  it("Deve receber somente números"),
    () => {
      const resultado = () => {
        add(["valor", 2]);
      };

      expect(resultado).toThrow();
    };

  it("Deve gerar um erro se um array não for informado"),
    () => {
      const resultado = () => {
        add();
      };

      expect(resultado).toThrow();
    };

  it("Deve retornar 0 se nenhum valor for informado"),
    () => {
      //arrange
      const numeros = [];

      //act
      const resultado = add(numeros);

      //assert
      expect(resultado).toBe(0);
    };

  it("Deve retornar um erro se múltiplos valores forem fornecidos individualmente ao invés de um array"),
    () => {
      const numero1 = 1;
      const numero2 = 2;

      const resultado = () => {
        add(numero1, numero2);
      };

      expect(resultado).toThrow();
    };

  it("Deve retornar um número se um array de números for informado"),
    () => {
      const numeros = [1, 2, 3];

      const resultado = add(numeros);

      expect(resultado).toBeTypeOf("number");
    };
});
