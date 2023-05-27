import {React, useState} from 'react'
import { useDispatch } from 'react-redux'

import { changeColor } from '../Reducers/theme'


function ChangeColor() {
    const [color, SetColor] = useState("")

    const dispatch = useDispatch()

  return (
    <div>
        <input type= "text" value ={color} 
           onChange = {(e)=> SetColor(e.target.value)}
        ></input>

        
            <button 
              onClick={()=> {
                  dispatch(changeColor(color))
              }}
        ></button>
    </div>
  )
}

export default ChangeColor