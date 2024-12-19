// models/mongodb/surpriseModel.js
const mongoose = require('mongoose');

const surpriseSchema = new mongoose.Schema({
    calendar_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Calendar', required: true },
    day: { type: Number, required: true },  // Le jour de la surprise (1 à 24)
    surprise_type: { type: String, required: true },  // Le type de surprise (texte, image, vidéo)
    content: { type: mongoose.Schema.Types.Mixed, required: true },  // Contenu de la surprise (texte, image URL, vidéo URL)
    is_opened: { type: Boolean, default: false }  // L'état d'ouverture de la surprise
});

const Surprise = mongoose.model('Surprise', surpriseSchema);

module.exports = Surprise;
