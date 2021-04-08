//sur openclassroom c'est " app.js"


const express = require('express'); // importer express

const app = express(); // créer notre application appeler avec la module express

app.use(express.static('frontend'))

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});


module.exports = app; //exporter pour pouvoir y acceder avec notement notre serveur node