const Calendar = require('../models/mysql/calendarModel');

exports.createCalendar = async (req, res) => {
    try {
        const calendar = await Calendar.create(req.body);
        res.status(201).json(calendar);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};