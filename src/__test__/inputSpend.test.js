import * as actions from '../actions/inputSpend';

describe('inputSpend Actions',() => {
    test('change Name fucntion test',() => {
        const key = "name";
        const value = "bag";
        const result = actions.changeName(key,value);
        const expected = {
            type:'CHANGE_VALUE',
            payload:{
                key,
                value
            }
        };

        expect(result).toEqual(expected);
    });

    test('add Spend function test',() => {
        const spend = "test";
        const result = actions.addSpend(spend);
        const expected = {
            type: 'ADD_SPEND',
            payload:{
                spend
            },
        };

        expect(result).toEqual(expected);
    })
})