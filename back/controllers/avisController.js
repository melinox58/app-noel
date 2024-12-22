const Avis = require('../models/mongodb/avisModel');

// Créer un nouvel avis
exports.createAvis = async (req, res) => {
    try {
        const newAvis = new Avis({
            user_id: req.body.user_id,
            calendar_id: req.body.calendar_id,
            comment: req.body.comment,
            note: req.body.note
        });
        const avis = await newAvis.save();
        res.status(201).json(avis);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Récupérer tous les avis
exports.getAvis = async (req, res) => {
    try {
        const avis = await Avis.find();
        res.json(avis);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Récupérer un avis par ID
exports.getAvisById = async (req, res) => {
    try {
        const avis = await Avis.findById(req.params.id);
        if (!avis) {
            return res.status(404).json({ msg: 'Avis not found' });
        }
        res.json(avis);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Avis not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Mettre à jour un avis par ID
exports.updateAvis = async (req, res) => {
    try {
        const avis = await Avis.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!avis) {
            return res.status(404).json({ msg: 'Avis not found' });
        }
        res.json(avis);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Supprimer un avis par ID
exports.deleteAvis = async (req, res) => {
    try {
        const avis = await Avis.findById(req.params.id);
        if (!avis) {
            return res.status(404).json({ msg: 'Avis not found' });
        }
        await avis.remove();
        res.json({ msg: 'Avis removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};