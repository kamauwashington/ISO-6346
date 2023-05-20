import { getOwnerCodeCharValueByDictionary } from '../src/getOwnerCodeCharValueByDictionary.function';
import { isISO6346Compliant } from '../src/isISO6346Compliant.function';

describe('ISO 6346 Regex Tests', () => {
	test('invalid category number should be false', () => {
		expect(
			isISO6346Compliant('CSQY3054383', getOwnerCodeCharValueByDictionary)
		).toBeFalsy;
    });
    //
    test('aplhabetic characters should be upper case', () => {
        expect(
            isISO6346Compliant(
                'csqu3054383',
                getOwnerCodeCharValueByDictionary
            )
        ).toBeFalsy;
    });

    test('container number must be 11 digits', () => {
        expect(
            isISO6346Compliant(
                'csqu30543831',
                getOwnerCodeCharValueByDictionary
            )
        ).toBeFalsy;
         
        expect(
            isISO6346Compliant(
                'csqu305438',
                getOwnerCodeCharValueByDictionary
            )
        ).toBeFalsy;
    });
});
