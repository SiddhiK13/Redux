import {Provider, useSelector, useDispatch} from "react-redux";
import {createStore} from "redux";

const reducer = (state={count:0}, action)=> {

  if(action.type=="Increment")
    return{
  count:state.count+1
}

  if(action.type=="Decrement")
    return{
  count:state.count-1
}
  return state;
}

const store = createStore(reducer);

function Counter(){
  const currentcount = useSelector(state => state.count);

  const dispatch = useDispatch();

  return(
    <>
    <h1>{currentcount}</h1>

    <button type='button' onClick={()=>dispatch({type:"Increment"})}>Increment</button>

    <button type='button' onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
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
