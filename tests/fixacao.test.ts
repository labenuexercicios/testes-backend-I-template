import { fixacao} from '../src/fixacao'

describe ("fixacao", ()=> {
    test("deve retornar true quando oa array for igual as letras da string passada",
    ()=>{
        const result = fixacao("ola")
        expect (result).toEqual(["o", "l", "a"])
    })

})

