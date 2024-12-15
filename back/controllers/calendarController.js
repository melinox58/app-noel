const Calendar = require('../models/mysql/calendarModel');
const Case = require('../models/mysql/caseModel');
const { createCalendarWithTheme } = require('../models/mysql/calendarModel');

// Créer un calendrier
exports.createCalendar = async (req, res) => {
    try {
        const calendar = await createCalendarWithTheme(req.body.user_id, req.body.title, req.body.theme);

        // Créer 24 cases numérotées de 1 à 24
        for (let i = 1; i <= 24; i++) {
            await Case.create({
                day_number: i,
                content: { type: 'gift', value: `Surprise du jour ${i}`, description: `Ouvrez cette case pour découvrir votre surprise du jour ${i}!` },
                is_opened: false,
                calendars_id: calendar.id
            });
        }

        res.status(201).json({ message: 'Calendrier et 24 cases créés avec succès', calendar });
    } catch (error) {
        console.error('Erreur lors de la création du calendrier et des cases :', error);
        res.status(400).json({ error: error.message });
    }
};
// Récupérer tous les calendriers
exports.getCalendars = async (req, res) => {
    try {
        const calendars = await Calendar.findAll(); // Remplace par ta logique si tu utilises autre chose
        res.json(calendars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Récupérer un calendrier par ID
exports.getCalendar = async (req, res) => {
    try {
        const calendar = await Calendar.findByPk(req.params.id);
        if (!calendar) {
            return res.status(404).json({ error: 'Calendrier non trouvé' });
        }
        res.status(200).json(calendar);
    } catch (error) {
        console.error('Erreur lors de la récupération du calendrier :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération du calendrier' });
    }
};

// Mettre à jour un calendrier
exports.updateCalendar = async (req, res) => {
    try {
        const [updated] = await Calendar.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCalendar = await Calendar.findByPk(req.params.id);
            res.status(200).json(updatedCalendar);
        } else {
            res.status(404).json({ error: 'Calendrier non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du calendrier :', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour du calendrier' });
    }
};

// Supprimer un calendrier
exports.deleteCalendar = async (req, res) => {
    try {
        const deleted = await Calendar.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Calendrier supprimé avec succès' });
        } else {
            res.status(404).json({ error: 'Calendrier non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du calendrier :', error);
        res.status(500).json({ error: 'Erreur lors de la suppression du calendrier' });
    }
};
