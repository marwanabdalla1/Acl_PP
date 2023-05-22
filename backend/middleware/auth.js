//This stands for authorization 

// This code will run each time we want to authorize and validate the token of a user 

//We will make this code return the id of the user,
// because recall that the token is made initially with the id of the user


const config = require('config')
const jwt = require('jsonwebtoken')


module.exports = function(req, res, next){
    const token = req.header('x-auth-token')
   // console.log(token)
    if (!token) return res.status(401).send('Access denied. No token provided')
   
    
    try {
       const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
      // console.log(decoded)
       req.user = decoded //This line will set the req.user data to the id of the user
       next()
    }
    catch (ex){
       res.status(400).send('Invalid Token.')
    }
}

