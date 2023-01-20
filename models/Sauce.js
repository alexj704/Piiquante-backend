const mongoose = require('mongoose')
const validate = require('mongoose-validator')

const textValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    }),
    validate({
        validator: 'matches',
        arguments: /^[0-9a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ.\s-]+$/i,
        message: 'Name should contain alpha-numeric characters and space only'
    }),

]


const sauceSchema = mongoose.Schema({
    userId: { type: String, require: true },
    name: { type: String, require: true, validate: textValidator },
    manufacturer: { type: String, require: true, validate: textValidator },
    description: { type: String, require: true, validate: textValidator },
    mainPepper: { type: String, require: true, validate: textValidator },
    imageUrl: { type: String, require: true },
    heat: { type: Number, require: true, min: 1, max: 10 },
    likes: { type: Number, require: true },
    dislikes: { type: Number, require: true },
    usersLiked: { type: Array, require: true },
    usersDisliked: { type: Array, require: true }
})

module.exports = mongoose.model('Sauce', sauceSchema)