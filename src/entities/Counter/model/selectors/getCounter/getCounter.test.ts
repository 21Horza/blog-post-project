import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        // deep partial to ignore some fields and test one needed ones
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        // "as" is allowed in tests
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
