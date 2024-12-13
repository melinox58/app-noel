const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');
const Avis = require('../models/mongodb/avisModel');

// Route pour créer un nouvel avis
router.post('/', avisController.createAvis);
router.post('/api/avis', async (req, res) => {
    try {
      // Vérifier que le calendrier appartient à l'utilisateur connecté
      const calendar = await Calendar.findOne({ _id: req.body.calendar_id, user_id: req.user.id });
      if (!calendar) {
        return res.status(403).json({ error: 'Calendrier non autorisé ou inexistant.' });
      }
  
      // Créer l'avis
      const avis = new Avis({
        user_id: req.user.id,
        calendar_id: req.body.calendar_id,
        comment: req.body.comment,
        note: req.body.note,
      });
      await avis.save();
  
      res.status(201).json(avis);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création de l\'avis.' });
    }
  });
  

// Route pour récupérer tous les avis
router.get('/', avisController.getAvis);

// Route pour récupérer un avis par ID
router.get('/:id', avisController.getAvisById);

// Route pour mettre à jour un avis par ID
router.put('/:id', avisController.updateAvis);

// Route pour supprimer un avis par ID
router.delete('/:id', avisController.deleteAvis);

module.exports = router;
