import { pratica2 } from "../src/pratica2"

describe("pratica2", () => {
    test("deve ter retonar true quando n for um número inteiro par", () => {
        const result1 = pratica2(10)
        const result2 = pratica2(2)
        const result3 = pratica2(224)

        expect(result1).toBe(true)
        expect(result2).toBe(true)
        expect(result3).toBe(true)
    })

    test("deve ter retonar false quando n for um número inteiro ímpar", () => {
        const result1 = pratica2(5)
        const result2 = pratica2(11)
        const result3 = pratica2(999)

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })
})