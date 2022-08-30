const mongoose = require('mongoose');

const friendshipsSchema = new mongoose.Schema({
    // the user who sent this request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // the user who ccepted this request, the naming is just to understand, otherwise , the users won't see a difference
    to_user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
});

const Friendship = mongoose.model('Friendship', friendshipsSchema);
model.exports = Friendship;