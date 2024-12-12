const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');

// Route pour créer un nouvel avis
router.post('/', avisController.createAvis);

// Route pour récupérer tous les avis
router.get('/', avisController.getAvis);

// Route pour récupérer un avis par ID
router.get('/:id', avisController.getAvisById);

// Route pour mettre à jour un avis par ID
router.put('/:id', avisController.updateAvis);

// Route pour supprimer un avis par ID
router.delete('/:id', avisController.deleteAvis);

module.exports = router;
