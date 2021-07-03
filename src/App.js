import './App.css';
import {createStore} from "redux";
import reducers from './reducers';

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



const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// action is called and store will be modified

store.subscribe(() => console.log(store.getState()));

// Dispatch - Perform the action to reducer


function App() {
  return (
    <div className="App">
     <h1>Redux Crash Course 2021</h1>
    </div>
  );
}

export default App;
