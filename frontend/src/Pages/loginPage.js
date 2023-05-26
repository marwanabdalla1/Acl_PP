import React from 'react'
import { useForm } from "react-hook-form";
import {useHistory, Link} from 'react-router-dom'
import {  useState, useEffect } from 'react';
import axios from 'axios';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
const LoginPage = () => {
    
  const [opened, { open, close }] = useDisclosure(false);



  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginData, setLoginData] = useState({})
  const [invalid, setInvalid] = useState(false)
  const history = useHistory();




  const onSubmit = async (data) => {
    await setLoginData(data)
  } 


  useEffect(()=> {
    if(loginData.email) {
      console.log(loginData)
     
      axios.post('http://localhost:3500/api/user/auth', { loginData })
          .then(response => {
            // Access the response headers
            const headers = response.headers;
            // Access specific header values
            const xAuthToken = headers['x-auth-token'];
            console.log(xAuthToken)
            localStorage.setItem('token', xAuthToken);
            console.log(response.data.role)
            localStorage.setItem('role', response.data.role)

            history.push({pathname:'/home'})
          })
          .catch(error => {
            // Handle error
            console.log(error.response.data)
            if (error.response.data==='Invalid email or password.') setInvalid(prevstate=> !prevstate)
            console.log(invalid)
            //console.error('Error:', error);
          });




    }
  }, [loginData])
     

 


    return ( 
      <div className="loginpage h-2/3 flex flex-col pb-10" 
      style={{ backgroundImage: 'url(../images/loginbackground.jpeg)' }}>



                <Drawer opened={opened} onClose={close} title="Drawer Title">
                  <h2>Hello Drawer</h2>

                  {/* Technically i can add another component here that displays the data */}
                </Drawer>


                <form class=" flex  w-96  m-auto flex-col h-min "
                  onSubmit={handleSubmit(onSubmit)}
                >
                { invalid &&  <h2 class=" text-rose-600">Invalid email or password.</h2>}
                  <label class=" text-black" htmlFor='email'> Email</label>
                  <input id="email"  type='email'{...register("email", { required: true })} />
                  <label class=" text-black" htmlFor='password'> Password</label>
                  <input id="password" type='password' {...register("password", { required: true })} />
                
                  <button class=" text-black" type='submit'> Login</button>
                  <button type="button" class="btn btn-primary">
                    <i class="bi bi-heart-fill"></i> Like
                  </button>

                </form>

        <Button class=' text-red-600 font-bold' onClick={open}>Open Drawer</Button>

   

    <center >
  < Link to ="/signup"> <button  class="   text-white bg-indigo-600 rounded"
   > Create a new Account</button> </Link>
    </center>

    </div>
 );
}
 
export default LoginPage;