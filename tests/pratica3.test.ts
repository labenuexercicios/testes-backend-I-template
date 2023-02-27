import {pratica3} from "../src/pratica3"

describe("pratica3", ()=> {
    test("deve receber dois numeros e retornar um objeto contendo a soma e multi, guardando respectivamente a soma e multiplicação ", ()=> {
        const result = pratica3(3, 9)

        expect(result.soma).toBe(12)
        expect(result.mult).toBe(27)

    })
})

//pratica3(3, 9)-> { soma: 12, mult:27 }