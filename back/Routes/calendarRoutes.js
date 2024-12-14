const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

// Créer un calendrier
router.post('/', calendarController.createCalendar);

// Récupérer un calendrier par ID
router.get('/:id', calendarController.getCalendar);

// Mettre à jour un calendrier
router.put('/:id', calendarController.updateCalendar);

// Supprimer un calendrier
router.delete('/:id', calendarController.deleteCalendar);

module.exports = router;