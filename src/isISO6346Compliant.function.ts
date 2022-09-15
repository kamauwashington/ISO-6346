export const isISO6346Compliant = function (containerNumber: string, getCharValue: (c: string) => number): boolean {
	// fail fast if any parameter is nu;l or undefined
    if (!containerNumber || /^\s+$/.test(containerNumber) || !getCharValue) return false;
    
	// validate for ISO 6346 compliant container number
	const isoPattern: RegExp = /^[A-Z]{3}[UJRZ]\d{6}\d$/;
    
	// fail fast if the containerNumber does not meet ISO 6346 standards
    if (!isoPattern.test(containerNumber)) return false;
    
    // get check digit (last character of containerNumber)
    const checkDigit: number = Number(containerNumber[containerNumber.length - 1]);

    /*
     * Calculation Step 3a
     *
     * calculate sum of container number chars multiplied by exponent to base 2,
     * the last character (check digit) is omitted from calculation as per spec
     */
    let calcSumExpB2: number = 0;
    for (let i = 0; i < containerNumber.length - 1; i++) {
        let extractedValue: number = 0;
        const contNumChar: string = containerNumber[i];
        /*
         * the first 4 characters are alphabetical, they need to be converted with
         * nultiples of 11 ommited
         */
        extractedValue = (i < 4)? getCharValue(contNumChar) : Number(contNumChar);
        // multiply the extracted value by exponent to base 2 using the position of the char
        calcSumExpB2 += extractedValue * Math.pow(2, i);
    }

    // Calculation Step 3b: Division by 11
    let stepCalc = calcSumExpB2 / 11;

    // Calculation Step 3c: Erase decimal digits
    stepCalc = Math.trunc(stepCalc);

    // Calculation Step 3d: Multiply by 11
    stepCalc *= 11;

    // Calculation Step 3e: a) - d) === CheckDigit
    return calcSumExpB2 - stepCalc === checkDigit;
}

//console.log(isISO6346Compliant('CSQU3054383',getOwnerCodeChaValueByAsciiCharCode));



