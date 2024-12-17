const mongoose = require('mongoose');

const AvisSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: [true, 'L\'identifiant utilisateur est requis'],
        validate: {
            validator: Number.isInteger,
            message: 'L\'identifiant utilisateur doit être un nombre entier'
        }
    },
    calendar_id: {
        type: Number,
        required: [true, 'L\'identifiant du calendrier est requis'],
        validate: {
            validator: Number.isInteger,
            message: 'L\'identifiant du calendrier doit être un nombre entier'
        }
    },
    comment: {
        type: String,
        required: [true, 'Le commentaire est requis'],
        validate: {
            validator: function(v) {
                return v.length >= 2 && v.length <= 500;
            },
            message: 'Le commentaire doit avoir entre 2 et 500 caractères'
        }
    },
    note: {
        type: Number,
        required: [true, 'La note est requise'],
        min: [0, 'La note doit être au moins 0'],
        max: [5, 'La note doit être au plus 5'],
        validate: {
            validator: Number.isInteger,
            message: 'La note doit être un nombre entier'
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Avis = mongoose.model('Avis', AvisSchema);

module.exports = Avis;