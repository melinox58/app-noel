const Case = require('../models/mysql/caseModel');

// Récupérer toutes les cases d'un calendrier spécifique
exports.getAllCases = async (req, res) => {
    try {
        const calendarId = req.params.calendarId;
        const cases = await Case.findAll({ where: { calendars_id: calendarId } });
        res.status(200).json(cases);
    } catch (error) {
        console.error('Erreur lors de la récupération des cases :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des cases' });
    }
};

// Récupérer une case spécifique
exports.getCase = async (req, res) => {
    try {
        const caseId = req.params.caseId;
        const caseItem = await Case.findByPk(caseId);
        if (!caseItem) {
            return res.status(404).json({ error: 'Case non trouvée' });
        }
        res.status(200).json(caseItem);
    } catch (error) {
        console.error('Erreur lors de la récupération de la case :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération de la case' });
    }
};

// Mettre à jour une case spécifique
exports.updateCase = async (req, res) => {
    try {
        const caseId = req.params.caseId;
        const [updated] = await Case.update(req.body, { where: { id: caseId } });
        if (updated) {
            const updatedCase = await Case.findByPk(caseId);
            res.status(200).json(updatedCase);
        } else {
            res.status(404).json({ error: 'Case non trouvée' });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la case :', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour de la case' });
    }
};

// Supprimer une case spécifique
exports.deleteCase = async (req, res) => {
    try {
        const caseId = req.params.caseId;
        const deleted = await Case.destroy({ where: { id: caseId } });
        if (deleted) {
            res.status(200).json({ message: 'Case supprimée avec succès' });
        } else {
            res.status(404).json({ error: 'Case non trouvée' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de la case :', error);
        res.status(500).json({ error: 'Erreur lors de la suppression de la case' });
    }
};

// Ouvrir une case spécifique
exports.openCase = async (req, res) => {
    try {
        const caseId = req.params.caseId;
        const caseItem = await Case.findByPk(caseId);
        if (!caseItem) {
            return res.status(404).json({ error: 'Case non trouvée' });
        }
        caseItem.is_opened = true;
        await caseItem.save();
        res.status(200).json(caseItem);
    } catch (error) {
        console.error('Erreur lors de l\'ouverture de la case :', error);
        res.status(500).json({ error: 'Erreur lors de l\'ouverture de la case' });
    }
};
