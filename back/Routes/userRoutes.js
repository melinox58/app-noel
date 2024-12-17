// back/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour créer un nouvel utilisateur
router.post('/', userController.createUser);

// Route pour obtenir tous les utilisateurs
router.get('/', userController.getUsers);

// Route pour obtenir un utilisateur par ID
router.get('/:id', userController.getUserById);

// Route pour mettre à jour un utilisateur
router.put('/:id', userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', userController.deleteUser);

// Route pour la connexion
router.post('/login', userController.loginUser);

// Route pour la déconnexion
router.post('/logout', userController.logoutUser);

//Route pour bloquer l'utilisateur (admin)
router.post('/block/:id', userController.blockUser);

module.exports = router;