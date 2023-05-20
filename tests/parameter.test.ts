import { getOwnerCodeCharValueByDictionary } from "../src/getOwnerCodeCharValueByDictionary.function";
import { isISO6346Compliant } from "../src/isISO6346Compliant.function";

describe("ISO 6346 Parameter Tests", () => {
   
    test("null or undefined container number should return false", () => {
        expect(
            isISO6346Compliant(
                null,
                getOwnerCodeCharValueByDictionary)
        ).toBeFalsy();
        expect(
            isISO6346Compliant(
                undefined, 
                getOwnerCodeCharValueByDictionary)
        ).toBeFalsy();
        
    });

    test('empty container number should return false', () => {
        expect(
            isISO6346Compliant(
                "",
                getOwnerCodeCharValueByDictionary
            )
        ).toBeFalsy();
        
        expect(
            isISO6346Compliant(
                '        ',
                getOwnerCodeCharValueByDictionary
            )
        ).toBeFalsy();

		});
	

    test('null or undefined mapping function should return false', () => {
			expect(
				isISO6346Compliant(
					'77777777',
					null
				)
            ).toBeFalsy();
            expect(
                isISO6346Compliant(
                    '77777777',
                    undefined
                )
            ).toBeFalsy();
		});
});