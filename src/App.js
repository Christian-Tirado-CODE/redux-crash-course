import './App.css';
import {createStore} from "redux";

// Store - Global state

// Action - Define what to do
const petIncrement = () => {
   return {
     type: "PET_INCREASED"
   }
}

const petDecrement = () => {
   return {
     type: "PET_DECREASED"
   }
}

// Reducer - Describe how an action change the state into another. Will check which
const petCounter = (state=0, action) => {
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

const store = createStore(petCounter);

// action is called and store will be modified

store.subscribe(() => console.log(store.getState()));

// Dispatch - Perform the action to reducer
store.dispatch(petIncrement());
store.dispatch(petIncrement());
store.dispatch(petDecrement());

function App() {
  return (
    <div className="App">
     <h1>Redux Crash Course 2021</h1>
    </div>
  );
}

export default App;
