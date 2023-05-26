const mongoose = require('mongoose')
const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity");
const config = require('config')
const jwt = require('jsonwebtoken')

 const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50
    } ,
    lastName :{
        type:String,
        required: true,
        minlength: 5,
        maxlength: 50
    } ,
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255

    }, 
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    role: {
        type: String,
        required: true,
    
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
    
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({id: this._id, role: this.role}, config.get('jwtPrivateKey'))
    return token
}

const User = mongoose.model('User',userSchema )


async function validateUser(user) {
    const schema = Joi.object({
      firstName: Joi.string().min(5).max(50).required(),
      lastName: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(1024).required(),
      role: Joi.string().required()
    });
    
    return schema.validateAsync(user);
  }
function ValidatePass(password){
    const label = "Password"

   return  passwordComplexity(undefined, label).validate(password);

}
 

exports.User = User
exports.validate = validateUser
exports.validatePass = ValidatePass