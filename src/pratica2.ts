export const pratica2 = (n: number): boolean | null => {
    if (typeof n !== "number") {
        return null
    }

    if (!Number.isInteger(n)) {
        return null
    }

    if (n % 2 == 0) {
      return true
    } else {
      return false
    }
}