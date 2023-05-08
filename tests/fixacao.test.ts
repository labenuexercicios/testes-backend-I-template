import {fixacao} from '../src/fixacao'

describe('teste da fixacao',()=>{
    test("testando se a funçao funciona",()=>{
        const result = fixacao("larissa")

        const strsplited = ["l","a","r","i","s","s","a"]

        expect(result).toEqual(strsplited)
    })
})