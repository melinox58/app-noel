const mongoose = require('mongoose');

const AvisSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    calendar_id: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: true
    },
    note: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Avis = mongoose.model('Avis', AvisSchema);

module.exports = Avis;