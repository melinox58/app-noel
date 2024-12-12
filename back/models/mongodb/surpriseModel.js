const mongoose = require('mongoose');

const SurpriseSchema = new mongoose.Schema({
    case_id: {
        type: Number,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Surprise = mongoose.model('Surprise', SurpriseSchema);

module.exports = Surprise;