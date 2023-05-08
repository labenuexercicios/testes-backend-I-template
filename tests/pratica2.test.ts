import { pratica2 } from "../src/pratica2";

describe("Testes da pratica2.ts", () => {
  //suites
  test("verifica se o dado de entrada for diferente de number, ele retorna null", () => {
    const result = pratica2("10" as any);
    expect(result).toBeNull();
  });
  test("verifica se o número não é inteiro", () => {
    const result = pratica2(10.5);

    expect(result).toBeNull();
  });
  test("verifica se o dado de entrada for par", () => {
    const result = pratica2(10);
    expect(result).toBe(true);
  });
});
