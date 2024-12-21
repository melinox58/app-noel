const { Calendar } = require('../models/mysql/calendarModel'); // Import du modèle Calendar
const { createCalendarWithTheme } = require('../models/mysql/calendarModel');


// Créer un calendrier avec un thème
exports.createCalendarWithTheme = async (req, res) => {
    try {
        const { title, themePath } = req.body;
        const user_id = req.user.id; // Utiliser l'ID de l'utilisateur connecté

        const calendar = await createCalendarWithTheme(user_id, title, themePath);

        res.status(201).json({
            message: 'Calendrier avec thème créé avec succès',
            calendar
        });
    } catch (error) {
        console.error('Erreur lors de la création du calendrier avec thème :', error);
        res.status(400).json({ message: 'Erreur lors de la création du calendrier avec thème' });
    }
};

// Créer un calendrier
exports.createCalendar = async (req, res) => {
    try {
        const { title } = req.body;
        const user_id = req.user.id; // Utiliser l'ID de l'utilisateur connecté

        const calendar = await Calendar.create({ title, user_id });

        res.status(201).json({
            message: 'Calendrier créé avec succès',
            calendar
        });
    } catch (error) {
        console.error('Erreur lors de la création du calendrier :', error);
        res.status(400).json({ message: 'Erreur lors de la création du calendrier' });
    }
};

// Récupérer tous les calendriers
exports.getCalendars = async (req, res) => {
    try {
        const calendars = await Calendar.findAll();
        res.json(calendars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Récupérer un calendrier spécifique pour un utilisateur connecté
exports.getCalendarForUser = async (req, res) => {
    try {
        const calendarId = req.params.id;
        const userId = req.user.id;

        const calendar = await Calendar.findOne({
            where: { id: calendarId, user_id: userId }
        });

        if (!calendar) {
            return res.status(404).json({ message: 'Calendrier non trouvé ou accès non autorisé' });
        }

        res.status(200).json(calendar);
    } catch (error) {
        console.error('Erreur lors de la récupération du calendrier :', error);
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};

// Mettre à jour un calendrier
exports.updateCalendar = async (req, res) => {
    try {
        const calendarId = req.params.id;
        const { title } = req.body;

        const updatedCalendar = await Calendar.update({ title }, {
            where: { id: calendarId, user_id: req.user.id }
        });

        if (updatedCalendar[0] === 0) {
            return res.status(404).json({ message: 'Calendrier non trouvé ou accès non autorisé' });
        }

        res.status(200).json({ message: 'Calendrier mis à jour avec succès' });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du calendrier :', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du calendrier' });
    }
};

// Supprimer un calendrier
exports.deleteCalendar = async (req, res) => {
    try {
        const calendarId = req.params.id;

        const deleted = await Calendar.destroy({
            where: { id: calendarId, user_id: req.user.id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Calendrier non trouvé ou accès non autorisé' });
        }

        res.status(200).json({ message: 'Calendrier supprimé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression du calendrier :', error);
        res.status(500).json({ message: 'Erreur lors de la suppression du calendrier' });
    }
};
