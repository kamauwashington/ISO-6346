export const getOwnCodeCharValueByPosition = function (shippingContainerChar: string) : number {
    const characterIndexMap: string = "0123456789A?BCDEFGHIJK?LMNOPQRSTU?VWXYZ";
    return Number(characterIndexMap.indexOf(shippingContainerChar, 1));
}