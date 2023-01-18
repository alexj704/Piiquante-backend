const mongoose = require('mongoose')
const uniqueEmailValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

userSchema.plugin(uniqueEmailValidator)

module.exports = mongoose.model('User', userSchema)