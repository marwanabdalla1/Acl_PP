import React from 'react'
import { useForm } from "react-hook-form";
import {useHistory, Link} from 'react-router-dom'
import {  useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextInput } from '@mantine/core';


//Some functionality to add later, make it so that you can only make a high role if you have a specific key. That key can be obtained from the company or whatever




//This form is made different than the other ones, 
// I think this will be easier to troubleshoot


//The point of this is that it prevents the updating state right before wanting to submit which was the problem with
//the previous forms, and we were forced to use useEffect
function SignUp () {

  const [invalids, setInvalids] = useState(false)
    const history = useHistory();
  

      const [formData, setFormData] = useState(
        {firstName: "", lastName: "", email: "", password: "",  passwordConfirm: "",
        role: ""}
      )
    
  
      function handleChange(event){
        const {name, value, type, checked} = event.target //this is optional we use when we're dealing with checkboxes
        setFormData(prevFormData=> {
            return {
                ...prevFormData,
              //  [event.target.name]: event.target.value
                [name] : type === "checkbox" ? checked : value /// when dealing with checkboxes, not really necessary in this case
            }
        })
      }
    


      function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        if(formData.password === formData.passwordConfirm) {
            if (invalids) setInvalids(false)
            console.log("Successfully signed up")
            const objtoSubmit = formData
            delete objtoSubmit.passwordConfirm
            console.log(objtoSubmit)

                axios.post('http://localhost:3500/api/user/register', { objtoSubmit })
                  .then(response => {
                    // Access the response headers
                    const headers = response.headers;
                    // Access specific header values
                    const xAuthToken = headers['x-auth-token'];
                    console.log(xAuthToken)
                   // const data =  response.json();
                    console.log(response.data.role)
                    localStorage.setItem('token', xAuthToken);
                    localStorage.setItem('role', response.data.role)
        
                    history.push({pathname:'/home'})
                  })
                  .catch(error => {
                    // Handle error
                  //  console.log(error.response.data)
                    console.error('Error:', error);
                  });
    

        } else {
           if (!invalids) setInvalids(true)
            console.log("Passwords do not match")
            return
        }
        
      }




    return (
    <div className="loginpage h-2/3 flex flex-col pb-10" 
        style={{ backgroundImage: 'url(../images/loginbackground.jpeg)' }}>


        <form class=" flex  w-96  m-auto flex-col h-min "
        onSubmit={handleSubmit}
        >
     
     
      <label class=" text-black" htmlFor='fname'> First Name:</label>
        <input
         type='text'
         placeholder='First Name'
         name="firstName"
         value={formData.firstName} // the value of the input box is set by the useState not the reverse
         onChange={handleChange}
        // {...register("firstName", { required: true })} 
         />



        <label class=" text-black" htmlFor='fname'> Last Name:</label>

        <input
          type='text'
          placeholder='Last Name'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
           />



        <label class=" text-black" htmlFor='email'> Email</label>
        <input
            type='email'
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
           />



        <label class=" text-black" htmlFor='password'> Password</label>
        <input 
            type='password' 
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}         
         />
        <br/>
      { invalids &&  <h2 class=" text-rose-600">Passwords do not match.</h2>}

            <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />

         <label htmlFor='Role'>What is your role?</label>
         <br />
        <select 
            id="role"
            value = {formData.role}
            onChange={handleChange}
            name= "role"
        >
                 <option value="">-- Choose --</option>
                <option value="individual_Trainee">Individual Trainee</option>
                <option value="corporate_trainee">Corporate trainee</option>
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
        </select>
        <button class=" text-black" type='submit'> Sign up</button>

        <Button >Abort</Button>
        </form>
       



        </div>
    )
}

export default SignUp