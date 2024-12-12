const express = require('express');
const router = express.Router();
const caseController = require('../controllers/CaseController');

// Route pour récupérer toutes les cases d'un calendrier spécifique
router.get('/calendars/:calendarId/cases', caseController.getAllCases);

// Route pour récupérer une case spécifique
router.get('/cases/:caseId', caseController.getCase);

// Route pour mettre à jour une case spécifique
router.put('/cases/:caseId', caseController.updateCase);

// Route pour supprimer une case spécifique
router.delete('/cases/:caseId', caseController.deleteCase);

// Route pour ouvrir une case spécifique
router.post('/cases/:caseId/open', caseController.openCase);

module.exports = router;