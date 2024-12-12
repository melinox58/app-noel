const Surprise = require('../models/mongodb/surpriseModel');

// Créer une nouvelle surprise
exports.createSurprise = async (req, res) => {
    try {
        const newSurprise = new Surprise({
            case_id: req.body.case_id,
            source: req.body.source,
            titre: req.body.titre,
            description: req.body.description
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
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Surprise not found' });
        }
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