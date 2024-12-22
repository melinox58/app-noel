const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');
const authMiddleware = require('../middelwares/authMiddelware'); // Auth middleware

// Créer un calendrier
router.post('/', calendarController.createCalendar);

// Récupérer tous les calendriers
router.get('/', calendarController.getCalendars);

// Récupérer un calendrier spécifique pour un utilisateur connecté
router.get('/:id', authMiddleware, calendarController.getCalendarForUser);

// Mettre à jour un calendrier
router.put('/:id', calendarController.updateCalendar);

// Supprimer un calendrier
router.delete('/:id', calendarController.deleteCalendar);

module.exports = router;
