export const changeName = (key,value) => ({
    type:'CHANGE_VALUE',
    payload:{
        key,
        value
    }
});

export const addSpend = (spend) => ({
    type:'ADD_SPEND',
    payload:{
        spend
    }
});

