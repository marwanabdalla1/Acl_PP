import React from 'react'
import {  useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import {useHistory, Link} from 'react-router-dom'
import {  TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginData, setLoginData] = useState({})
  const [invalid, setInvalid] = useState(false)
  const history = useHistory();

  const [invalids, setInvalids] = useState(false)

  const [formData, setFormData] = useState(
    {firstName: "", lastName: "", email: "", password: "",  passwordConfirm: "",
    role: ""}
  )
  const [opened, { open, close }] = useDisclosure(false);


  function handleSubmitS(event) {
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


                <form class=" flex  w-96  m-auto flex-col h-min "
                  onSubmit={handleSubmit(onSubmit)}
                >
                { invalid &&  <h2 class=" text-rose-600">Invalid email or password.</h2>}
                  <label class=" text-black" htmlFor='email'> Email</label>
                  <input id="email"  type='email'{...register("email", { required: true })} />
                  <label class=" text-black" htmlFor='password'> Password</label>
                  <input id="password" type='password' {...register("password", { required: true })} />
                
                  <button class=" text-black" type='submit'> Login</button>
                  

                </form>


                <Modal opened={opened} onClose={close} title="Authentication" centered>
         {/* The Sign Up form */}
         <form class=" flex  w-96  m-auto flex-col h-min "
                    onSubmit={handleSubmitS}
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
      </Modal>
             
         
                {/* <center >
                  < Link to ="/signup"> <button  class="   text-white bg-indigo-600 rounded"
                  > Create a new Account</button> </Link>
                </center> */}
                <Group position="center">
                   <Button onClick={open}>Create a New Account</Button>
                </Group>

    </div>
 );
}
 
export default LoginPage;