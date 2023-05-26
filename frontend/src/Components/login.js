import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Reducers/userReducer'
import { logout } from '../Reducers/userReducer'


function Login() {

    const dispatch = useDispatch()
  return (
    <div>
         
            <button 
            onClick={()=> {
                dispatch(login({name: "Maro", age: 21, email: "marwanabdalla659@gmail.com"}))
            }}
            >Login</button>



            <button 
            onClick={()=> {
                dispatch(logout())
            }}
            >Logout</button>
    </div>
  )
}

export default Login
