const initialState = {
  allSpend:[
    {
      "id":1,
      "name":"シャツ",
      "cost":10000,
      "type":"衣類",
      "date":2018-5-2,
      "memo":"",
    },
    {
      "id":2,
      "name":"パンツ",
      "cost":30000,
      "type":"衣類",
      "date":2018-5-3,
      "memo":"",
    },
    {
      "id":3,
      "name":"MacBookPro",
      "cost":200000,
      "type":"日用品",
      "date":2018-5-4,
      "memo":"ローン払い",
    },
    {
      "id":4,
      "name":"ベルト",
      "cost":3000,
      "type":"衣類",
      "date":2018-5-4,
      "memo":"",
    }
  ],
  spend:[],
  error:false
};

export default (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_MONTH':
      return {
        ...state,
        allSpend:action.payload.spend,
      };

    case 'ADD_SPEND':
      return {
        ...state,
        spend:state.spend.concat(action.payload.spend)
      }

    default :
      return state;
  }
}
