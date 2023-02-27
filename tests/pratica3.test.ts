import {pratica3} from '../src/pratica3'
// desenvolva testes para uma função que recebe dois números e retorna um objeto com duas propriedades:
// a soma de ambos
// a multiplicação de ambos

describe("Testar o arquivo pratica3.ts", () => {
    test("uma função que recebe dois números e retorna um objeto com duas propriedades: soma e multi", () => {
        const result = pratica3(3, 5)
        const expectResult = {
            soma:8,
            multi: 15
        }
        expect(result).toEqual(expectResult)
    })
})