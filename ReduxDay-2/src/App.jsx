import {Provider,useSelector, useDispatch} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice= createSlice(
  {
    name:"counter",
    initialState:0,
    reducers:{
      increment:((state)=>state+1),
      decrement:((state)=>state-1)
    }
  }
);

const {increment, decrement} = counterSlice.actions;
const counterReducer = counterSlice.reducer;

const store = configureStore({
  reducer : counterReducer
})

function Counter(){
  const count = useSelector((state) =>state);
  const dispatch = useDispatch();

  return(
    <>

    <h1>{count}</h1>

    <button type="button" onClick={()=>dispatch(increment())}>Increment</button>

    <button type="button" onClick={()=>dispatch(decrement())}>Decrement</button>

    </>
  )
}


function App() {

  return (
    <>
      
      <Provider store={store}>

        <Counter/>

      </Provider>

    </>
  )
}

export default App
