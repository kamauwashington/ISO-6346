export const getOwnerCodeCharValueByDictionary = function (shippingContainerChar: string): number {
    if (!shippingContainerChar || shippingContainerChar.length != 1) return -1;
    const alphaReductionDictionary: { [character: string]: number } = {
        "A": 10, "B": 12, "C": 13, "D": 14, "E": 15, "F": 16, "G": 17, "H": 18, "I": 19, "J": 20, "K": 21, "L": 23, "M": 24,
        "N": 25, "O": 26, "P": 27, "Q": 28, "R": 29, "S": 30, "T": 31, "U": 32, "V": 34, "W": 35, "X": 36, "Y": 37, "Z": 38
    }
    return alphaReductionDictionary[shippingContainerChar] || -1;
}