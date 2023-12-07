import { fixacao } from '../src/fixacao'

describe("testando fixacao", () => {
  test("deve retornar lista contendo cada letra de uma palavra", () => {
    const result1 = fixacao("dev")
    const result2 = fixacao("fulano")
    const result3 = fixacao("tdd")

    expect(result1).toEqual(["d", "e", "v"])
    expect(result2).toEqual(["f", "u", "l", "a", "n", "o"])
    expect(result3).toEqual(["t", "d", "d"])
    expect(result3).toHaveLength(3)
  })

  test("toContainEqual", () => {
    expect([
      { id: "u001" },
      { id: "u002" },
      { id: "u003" }
    ]).toContainEqual({ id: "u001" })
  })

  test("praticando", () => {
    expect(20).toBeGreaterThan(19)
    expect(20).toBeGreaterThanOrEqual(20)
  
    expect("").toBeFalsy()
    expect("a").toBeTruthy()

    expect({ id: "u001" }).toHaveProperty("id", "u001")
  })
})