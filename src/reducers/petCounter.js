const petCounter = (state=10, action) => {
    switch(action.type){
      case "PET_INCREASED":
        return state + 1;
        break;
      case "PET_DECREASED":
        return state - 1;
        break;
        default:
          return state;
    }
  }

  export default petCounter;