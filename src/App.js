import React from 'react';
import './styles/App.css'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/counterActions'

function App() {

  const counter = useSelector(state => state.count)


  const dispatch = useDispatch()

  return (
    <div className="App">
    <div>
      <h1>Our Counter</h1>
      <p>Counter: {counter}</p>
      <button className="ui green button" onClick={() => dispatch(increment())}>+</button>
      <button className="ui red button" onClick={() => dispatch(decrement())}>-</button>
    </div>
    </div>
  );
}

export default App;
