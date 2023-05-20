import { getOwnerCodeCharValueByDictionary } from '../src/getOwnerCodeCharValueByDictionary.function';
import { getOwnerCodeCharValueByAsciiCharCode } from '../src/getOwnerCodeCharValueByAsciiCharCode.function';
import { getOwnCodeCharValueByPosition } from '../src/getOwnerCodeCharValueByPosition.function';
import { isISO6346Compliant } from '../src/isISO6346Compliant.function';

describe('ISO 6346 Compliance', () => {
	test('valid container number should be true', () => {
		expect(
			isISO6346Compliant('CSQU3054383', getOwnerCodeCharValueByDictionary)
        ).toBeTruthy;
        
        expect(
            isISO6346Compliant(
                'CSQU3054383',
                getOwnerCodeCharValueByAsciiCharCode
            )
        ).toBeTruthy;

        expect(
            isISO6346Compliant(
                'CSQU3054383',
                getOwnCodeCharValueByPosition
            )
        ).toBeTruthy;
    });
    
    test('check digit must match when container number is in valid format', () => {
        expect(
            isISO6346Compliant(
                'CSQZ3054383',
                getOwnerCodeCharValueByDictionary
            )
        ).toBeFalsy;

        expect(
            isISO6346Compliant(
                'CSQZ3054383',
                getOwnerCodeCharValueByAsciiCharCode
            )
        ).toBeFalsy;

        expect(
            isISO6346Compliant(
                'CSQZ3054383',
                getOwnCodeCharValueByPosition
            )
		).toBeFalsy;
    });
});
