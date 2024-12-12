const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');
const caseController = require('../controllers/CaseController');

//Creer un calendrier
router.post('/', calendarController.createCalendar);

// Route pour récupérer toutes les cases d'un calendrier spécifique
router.get('/:calendarId/cases', caseController.getAllCases);

module.exports = router;