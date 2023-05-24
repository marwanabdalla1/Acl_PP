const {User, validate, validatePass} = require('../model/userSchema')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')
  
const userController = {
    registerUser: async (req, res) => {


      if (req.body.objtoSubmit)    req.body = req.body.objtoSubmit


        //first check if the data coming is valid
       let {error} = validate(req.body)
       if (error ) return res.status(400).send(error.details[0].message)


        //check if the password is valid
       let {error: passError} = validatePass(req.body.password)
        if (passError ) return res.status(400).send(passError.details[0].message)


        //check if the email already exists in the database
        let user = await User.findOne({email: req.body.email})
        if (user) return res.status(400).send('User already registered')


        //create the new user, use the lodash package to avoid duplication ex: user.firstname etc...
        user = new User(_.pick(req.body, ['firstName','lastName', 'email', 'password','role']))
        //salt and hash the password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()

        //also use the lodash package

        const token = user.generateAuthToken()


        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'firstName', 'email', 'password','role']))

        

        
    },
    authUser: async (req, res) => {

      console.log(req.user)
      if (req.body.loginData)    req.body = req.body.loginData

      console.log(req.body)
        //first check if the data coming is valid
        let {error} = validateAuth(req.body)
        if (error ) return res.status(400).send('Invalid email or password.')


        //check if the user exits

        let user = await User.findOne({email: req.body.email})
        if (!user) return res.status(400).send('Invalid email or password.')

        //check if the password matches this user's password


        //if we do not add the await line the code will go and treat validPassword as truth and thus will not achieve what we want to do.
       
 

       const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send('Invalid email or password.')

       
        // the JWT is kinda like your passport, you will need it to acess apis
        const token = user.generateAuthToken()
        //res.send(token)
        res.header('x-auth-token', token).send(_.pick(user, [ 'firstName', 'lastName']))

         function validateAuth(user) {
            const schema = Joi.object({
              email: Joi.string().min(5).max(255).required().email(),
              password: Joi.string().min(5).max(1024).required()
            });
            
            return schema.validateAsync(user);
          }
    },
    getUser: async (req, res)=> {
        console.log(req.user)
        const user = await User.findById(req.user.id).select('-password')
       // res.send(user)
       res.send(req.user)
        //console.log(user)
    }

}

 
module.exports = userController