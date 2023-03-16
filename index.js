const debug = require('debug')('app:startup')
const dbdebug = require('debug')('app:db')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan') 
const Joi = require('joi')
const logger = require('./middleware/logger')
const express = require('express')
const { urlencoded } = require('express')
const app = express()
const courses = require('./routes/courses')
const home = require('./routes/home')


//setting up the viewing template
app.set('view engine', 'pug')
app.set('views', './views')

//Using packages
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(express.static('public'))
app.use(helmet())




//The Environment settings
console.log('My Application Name:' + config.get('name'))
console.log('My Application Mail Server:' + config.get('mail.host'))
console.log('My Application Mail Password:' + config.get('mail.password'))


if (app.get('env')==='development') {
    app.use(morgan('tiny'))
    debug('Morgan is enabled')
}

dbdebug('Marwan is enabled')


//middleware functions
app.use(logger)





//routing fucntions
app.use('/', home)
app.use('/api/courses', courses)



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on Port ${port}`))