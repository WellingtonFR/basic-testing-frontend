import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

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
