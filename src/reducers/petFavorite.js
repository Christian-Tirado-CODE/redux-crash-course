const petFavorite = (state=5, action) => {
    switch(action.type){
      case "PET_FAVORITE_INCREASED":
        return state + 1;
        break;
      case "PET_FAVORITE_DECREASED":
        return state - 1;
        break;
        default:
          return state;
    }
  }

export default petFavorite;