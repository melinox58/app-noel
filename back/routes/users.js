const express = require('express');

const router = express.Router();
 
router.get('/', (req, res) => {
    res.json("Bonjour user")
})

router.get('/login', (req, res) => {
    res.json("Merci de vous authentifier")
})

module.exports = router;