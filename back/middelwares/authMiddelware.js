const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token manquant' });
    }

    try {
        const decoded = jwt.verify(token, 'votre_clé_secrète');  // Vérifier le token
        req.user = decoded.user;  // Ajouter l'utilisateur décodé dans la requête
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalide' });
    }
};
