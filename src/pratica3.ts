export interface OperacaoAritimetica {
    soma: number,
    multi: number
}

export const pratica3 = (num1:number, num2:number):OperacaoAritimetica => {
    const operacao: OperacaoAritimetica = {
        soma: num1 + num2,
        multi: num1 * num2
    }

    return operacao
}