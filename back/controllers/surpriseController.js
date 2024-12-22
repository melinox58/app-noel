// controllers/surpriseController.js
const Surprise = require('../models/mongodb/surpriseModel');

// Créer une nouvelle surprise
exports.createSurprise = async (req, res) => {
    try {
        const newSurprise = new Surprise({
            calendar_id: req.body.calendar_id,
            day: req.body.day,
            surprise_type: req.body.surprise_type,
            content: req.body.content,
            is_opened: req.body.is_opened,
        });
        const surprise = await newSurprise.save();
        res.status(201).json(surprise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Récupérer toutes les surprises
exports.getSurprises = async (req, res) => {
    try {
        const surprises = await Surprise.find();
        res.json(surprises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Récupérer une surprise par ID
exports.getSurpriseById = async (req, res) => {
    try {
        const surprise = await Surprise.findById(req.params.id);
        if (!surprise) {
            return res.status(404).json({ msg: 'Surprise not found' });
        }
        res.json(surprise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Mettre à jour une surprise par ID
exports.updateSurprise = async (req, res) => {
    try {
        const surprise = await Surprise.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!surprise) {
            return res.status(404).json({ msg: 'Surprise not found' });
        }
        res.json(surprise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Supprimer une surprise par ID
exports.deleteSurprise = async (req, res) => {
    try {
        const surprise = await Surprise.findById(req.params.id);
        if (!surprise) {
            return res.status(404).json({ msg: 'Surprise not found' });
        }
        await surprise.remove();
        res.json({ msg: 'Surprise removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
