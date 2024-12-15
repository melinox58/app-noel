const express = require('express');
const router = express.Router();
const surpriseController = require('../controllers/surpriseController');

// Route pour créer une nouvelle surprise
router.post('/', surpriseController.createSurprise);

// Route pour récupérer toutes les surprises
router.get('/', surpriseController.getSurprises);

// Route pour récupérer une surprise par ID
router.get('/:id', surpriseController.getSurpriseById);

// Route pour mettre à jour une surprise par ID
router.put('/:id', surpriseController.updateSurprise);

// Route pour supprimer une surprise par ID
router.delete('/:id', surpriseController.deleteSurprise);

module.exports = router;
