exports.generateShareableLink = async (req, res) => {
    try {
        const calendarId = req.params.id;
        const calendar = await Calendar.findByPk(calendarId);

        if (!calendar) {
            return res.status(404).json({ message: 'Calendrier non trouvé' });
        }

        const shareableLink = `http://localhost:3000/share/calendar/${calendarId}`;

        res.status(200).json({ link: shareableLink });
    } catch (error) {
        console.error('Erreur lors de la génération du lien de partage :', error);
        res.status(500).json({ message: 'Erreur lors de la génération du lien de partage' });
    }
};