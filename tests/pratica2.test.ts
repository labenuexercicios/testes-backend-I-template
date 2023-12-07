import { pratica2 } from '../src/pratica2'

describe("Testando pratica2", () => {
  test("deve retornar true se receber número inteiro par", () => {
    const result1 = pratica2(10)
    const result2 = pratica2(2)

    expect(result1).toBe(true)
    expect(result1).toEqual(true)
    expect(result2).not.toBe(false)
    expect(result2).toBeTruthy()
  })

  test("deve retornar false se receber número inteiro ímpar", () => {
    const result1 = pratica2(11)
    const result2 = pratica2(29)

    expect(result1).toBe(false)
    expect(result2).toBe(false)
  })

  test("deve retornar null se receber parâmetro diferente de number", () => {
    const result = pratica2("2" as any)

    expect(result).toBeNull()
    expect(result).toBe(null)
    expect(result).toEqual(null)
  })

  test("deve retornar null se receber número não-inteiro", () => {
    // const result1 = pratica2(2.2)
    // const result2 = pratica2(0.001)
    // const result3 = pratica2(100.123456789)

    // expect(result1).toBeNull()
    // expect(result2).toBeNull()
    // expect(result3).toBeNull()

    for (let i = 0.1; i < 3.1; i++) {
      const result = pratica2(i)
      expect(result).toBeNull()
    }
  })
})
