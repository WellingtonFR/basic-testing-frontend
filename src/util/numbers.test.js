import { it, expect, describe } from "vitest";

import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("Deve retornar um numero"),
    () => {
      const numero = "2";

      const resultado = transformToNumber(numero);

      expect(resultado).toBeTypeOf("number");
    };

  it("Deve retornar NaN para valores que não podem serem transformados"),
    () => {
      const numero = "string";

      const resultado = transformToNumber(numero);

      expect(resultado).toBeNaN();
    };

  it("Deve converter uma string numérica em número", () => {
    expect(transformToNumber("42")).toBe(42);
    expect(transformToNumber("3.14")).toBe(3.14);
  });

  it("Deve retornar NaN para uma string não numérica", () => {
    expect(transformToNumber("abc")).toBeNaN();
  });

  it("Deve retornar um número se um número for informado", () => {
    expect(transformToNumber(42)).toBe(42);
    expect(transformToNumber(3.14)).toBe(3.14);
  });

  it("Deve manipular valores booleanos corretamente", () => {
    expect(transformToNumber(true)).toBe(1);
    expect(transformToNumber(false)).toBe(0);
  });

  it("Deve manipular arrays corretamente", () => {
    expect(transformToNumber([42])).toBe(42);
    expect(transformToNumber([1, 2])).toBeNaN();
  });

  it("Deve manipular objetos corretamente", () => {
    expect(transformToNumber({})).toBeNaN();
    expect(transformToNumber({ value: 42 })).toBeNaN();
  });
});
