const initialState = {
  allSpend:[
    {
      "name":"bag",
      "cost":30000,
      "type":"beauty",
      "date":2018-5-2,
      "memo":"",
    },
    {
      "name":"bag",
      "cost":30000,
      "type":"beauty",
      "date":2018-5-3,
      "memo":"",
    },
    {
      "name":"bag",
      "cost":30000,
      "type":"beauty",
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
