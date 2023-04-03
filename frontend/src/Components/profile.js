import React from 'react';
import {useSelector} from "react-redux"



function Profile () {


//for the components that subscribe to other states
const user = useSelector((state)=> state.user.value)
const themeColor = useSelector((state)=> state.theme.value)

    return ( 
        <div style = {{color: themeColor}}> 
            <h2>Profile</h2>
            <p>Name: </p>
            <p>Age: {user.age}</p>
            <p>Email:</p>
        </div>
     );
}

export default Profile;