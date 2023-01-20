const mongoose = require('mongoose');
const uniqueEmailValidator = require('mongoose-unique-validator');
const validate = require('mongoose-validator')

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: `L'email n'est pas valide`
    }),
];

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true, validate: emailValidator },
    password: { type: String, require: true }
})

userSchema.plugin(uniqueEmailValidator)

module.exports = mongoose.model('User', userSchema)