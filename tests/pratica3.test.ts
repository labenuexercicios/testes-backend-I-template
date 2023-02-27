import { pratica3 } from "../src/pratica3"

describe("pratica3", () => {
    test("deve receber dois número e retornar um objeto contendo soma e mult, guardando respectivamente a soma e a multiplicação  dos números recebidos", () => {
        const result = pratica3(3,9)
        expect (result.soma).toBe(12)
        expect (result.mult).toBe(27)
    })
})