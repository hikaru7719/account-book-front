const toList = action =>{
  const dic = {};
  dic[action.payload.key]=action.payload.value;

  return dic;
}

const initialState = {
  allSpend:[
    {
      "name":"シャツ",
      "cost":10000,
      "type":"衣類",
      "date":2018-5-2,
      "memo":"",
    },
    {
      "name":"パンツ",
      "cost":30000,
      "type":"衣類",
      "date":2018-5-3,
      "memo":"",
    },
    {
      "name":"MacBookPro",
      "cost":200000,
      "type":"日用品",
      "date":2018-5-4,
      "memo":"ローン払い",
    },
    {
      "name":"ベルト",
      "cost":3000,
      "type":"衣類",
      "date":2018-5-4,
      "memo":"",
    }
  ],
  spend:{
      "name":'',
      "cost":'',
      "type":'',
      "date":'',
      "memo":'',
  },
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
        allSpend:state.allSpend.concat(action.payload.spend)
      };

      case 'CHANGE_VALUE':
        console.log(toList(action));
        return{
            ...state,
            spend:{...state.spend,...toList(action)},
        }


    default :
      return state;
  }
}
