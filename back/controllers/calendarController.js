const Calendar = require('../models/mysql/calendarModel');
const Case = require('../models/mysql/caseModel');

exports.createCalendar = async (req, res) => {
    try {
        //Créer 1 nouveau calendrier
        const calendar = await Calendar.create(req.body);

        // Créer 24 cases numérotées de 1 à 24
        const cases = [];
        for (let i = 1; i <= 24; i++) {
            cases.push({
                day_number: i,
                content: { type: 'gift', value: `Surprise du jour ${i}`, description: `Ouvrez cette case pour découvrir votre surprise du jour ${i}!` },
                is_opened: false,
                calendars_id: calendar.id
            });
        }
        // Insérer les cases dans la base de données avec la méthode bulkCreate de Sequelize
        await Case.bulkCreate(cases);

        res.status(201).json({ message: 'Calendrier et 24 cases créés avec succès', calendar });
    } catch (error) {
        console.error('Erreur lors de la création du calendrier et des cases :', error);
        res.status(400).json({ error: error.message });
    }
};