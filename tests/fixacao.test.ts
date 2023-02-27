import { fixacao } from "../src/fixacao"

describe("fixacao", () => {
    test("recebe um string e separa suas letras em um array", () => {
        const result = fixacao("Marina")
        expect(result).toEqual(["M", "a", "r", "i", "n", "a"])
        
    })
})