import { error } from "console"

interface pratica3 {
    soma: number,
    mult: number
}

export const pratica3 = (x: number, y: number)=>{
    if (
        typeof x !== "number"
        || typeof y !== "number"

        ){
            throw new Error(
                "Os argumentos devem ser number"
                )            
        }

    return{
        soma: x + y,
        mult: x * y
    }
    

}