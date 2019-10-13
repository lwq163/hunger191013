
const def = {
  click_toptks: false,
  click_bottomtk: false,
  buylist: []
};

const render = (state = def, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "INIT_DATA": {
      state.seller = action.data.Data.seller; //卖方
      state.goods = action.data.Data.goods;
      state.ratings = action.data.Data.ratings; //评价
      state.goods.map(item => {
        item.foods.map(i => {
          i.num = 0;
        });
      });
      return {
        ...state
      };
    }

    case "CHANGE_COUNT": {
      state.i = action.i; //foods的下标
      state.index = action.index; //goods的下标
      state.goods[action.index].foods[action.i].num = action.num;
      let id = state.buylist.findIndex(item => {
        return item.name === state.goods[state.index].foods[state.i].name;
      });
      if (id == -1) {
        state.buylist.push(state.goods[state.index].foods[state.i]);
      }
      state.totalcount = state.buylist.reduce((prev, next) => {
        return prev + next.num;
      }, 0);

      state.totalprice = state.buylist.reduce((prev, next) => {
        return prev + next.num * next.price;
      }, 0);
     
      return {
        ...state,
        goods: [...state.goods],
        buylist: [...state.buylist]
      };
    }

    case "CLICK_TOPTKS": {
      state.click_toptks = !state.click_toptks;
      return {
        ...state
      };
    }
    case "CLICK_BOTTOMTKS": {
      state.click_bottomtk = !state.click_bottomtk;

      return {
        ...state
      };
    }
    case "CLICK_BTN": {
      state.buylist[action.index].num = action.nums;

      state.totalcount = state.buylist.reduce((prev, next) => {
        return prev + next.num;
      }, 0);

      state.totalprice = state.buylist.reduce((prev, next) => {
        return prev + next.num * next.price;
      }, 0);

      return {
        ...state,
        buylist: [...state.buylist]
      };
    }
    case "EVALUATE_DATA": {
      state.evaluateData = action.evaluateData;
      state.newevaluateData = action.evaluateData;
      return {
        ...state,
        newevaluateData: [...state.newevaluateData]
      };
    }
    case "FILTER_DATA_YES": {
      state.newevaluateData = state.evaluateData.filter(item => {
        return item.score >= 2.5;
      });
      return {
        ...state,
        newevaluateData: [...state.newevaluateData]
      };
    }
    case "FILTER_DATA_NO": {
      state.newevaluateData = state.evaluateData.filter(
        item => item.score <= 2.5
      );
      return {
        ...state,
        newevaluateData: [...state.newevaluateData]
      };
    }
    case "FILTER_CAN_WATCH": {
      state.newevaluateData = state.evaluateData.filter(
        item => item.text !== ""
      );
      return {
        ...state,
        newevaluateData: [...state.newevaluateData]
      };
    }
    case "QK_LISTS":
      {
        state.buylist=[]
        return{
          ...state,
          buylist: [...state.buylist]
        }
      }
    default:
      break;
  }
  return newState;
};


export default render;
