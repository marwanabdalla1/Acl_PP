const config = require('config')
const jwt = require('jsonwebtoken')




module.exports = function (req, res, next) {
 //  console.log(`from the roles Auth file  ${JSON.stringify(req.user)}`) //you have to use json.stringify, if you don't it will return the default string representaion of the object, object object
   
  //  if (req.user.role!=="individual_Trainee") return res.status(403).send('Access denied.')
    next()
}