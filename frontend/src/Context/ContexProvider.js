import { createContext, useContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer"



const initialState ={
    currentUser:null,
    openLogin:false,
    loading:false,
    alert:{open:false,severity:'info',message:''},
}

const Context  = createContext(initialState)

export const useValue =() => {
    return useContext(Context)
}





const ContexProvider = ({children}) => {
    const [state , dispatch] = useReducer(Reducer,initialState)
    useEffect(()=>{
      const currentUser = JSON.parse(localStorage.getItem('currentUser'))
      if(currentUser){
        dispatch({type:'UPDATE_USER',payload:currentUser})
      }
    },[])
  return (
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  )
}

export default ContexProvider
