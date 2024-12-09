const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.post('/', calendarController.createCalendar);

module.exports = router;