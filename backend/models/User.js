const mongoose = require('mongoose');

// Schema

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

//populate books user created
UserSchema.virtual('books', {
    ref: 'Book',
    foreignField: 'createdBy',
    localField: '_id',
});

UserSchema.set('toJSON',{ virtuals: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;