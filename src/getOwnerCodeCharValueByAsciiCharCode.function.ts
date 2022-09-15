export const getOwnerCodeCharValueByAsciiCharCode = function (shippingContainerChar: string): number {
	if (!shippingContainerChar || shippingContainerChar.length != 1) return -1;
	const charCodeReduced = shippingContainerChar.charCodeAt(0) - 55; // this reduces ASCII A to 10, as per algorithm
	const charCodeRemainder = charCodeReduced % 11; // identifies occurrences of multiples of 11, and the position of items that arent
	const weight = Math.trunc((charCodeReduced - charCodeRemainder) / 10); // generates a number that indicates any addition to charCode needed to skip multiples of 11
	return Math.trunc((charCodeReduced + weight) / 11) + charCodeReduced; // generates an integer as per the ISO 6346 specification
};
