import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {petIncrement, petDecrement} from "./actions";
function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Crash Course 2021</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add Pet</button>
      <button onClick={() => dispatch(petDecrement(2))}>Remove Pet</button>
      <h2>Pet counter: {petCounter}</h2>
      <h2>Number of Favorite Pets: {petFavorite}</h2>
    </div>
  );
}

export default App;
