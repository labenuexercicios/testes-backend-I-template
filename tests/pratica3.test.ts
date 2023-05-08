    import {pratica3} from '../src/pratica3'
// Crie o arquivo tests/pratica3.test.ts e desenvolva testes para uma função que recebe dois números e retorna um objeto com duas propriedades:
// a soma de ambos
// a multiplicação de ambos

describe("Testes da pratica3.ts",()=>{ //suites
    test(" Verifica se recebe dois números e retorna um objeto com duas propriedades: a soma de ambos a multiplicação de ambos",()=>{
        const result = pratica3(3,5)
        const expectedResult = {
            soma: 8,
            mult: 15
        }
        expect(result).toEqual(expectedResult)
    })
})