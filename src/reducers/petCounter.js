const petCounter = (state=10, action) => {
    switch(action.type){
      case "PET_INCREASED":
        return state + action.payload;
        break;
      case "PET_DECREASED":
        return state - action.payload;
        break;
        default:
          return state;
    }
  }

  export default petCounter;