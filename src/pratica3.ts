interface Pratica3 {
  soma: number,
  multiplicacao: number
}

export const pratica3 = (a: number, b: number): Pratica3  => {
  return {
    soma: a + b,
    multiplicacao: a * b
  }
}