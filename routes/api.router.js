/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/*
Définition des routes
*/
// Accueil
// router API renvoi du JSON
router.get('/', (req, res) => {
    res.json({ msg: 'hello API'});
});
//


/*
Exporter le module de route
*/
module.exports = router;
//
