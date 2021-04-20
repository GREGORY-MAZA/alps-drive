//sur openclassroom c'est " app.js"


const express = require('express'); // importer express
const drive = require('./drive'); // importer le module drive
const app = express(); // créer notre application appeler avec la module express
const port = 3000 // déclaration d'une variable port avec comme valeur 3000
app.use(express.static('frontend')) // express.static est une fonction intégré dans express 

app.get('/api/drive', (req, res) => {
    const myFilesPromise = drive.functionListFolder() // appel de la fonction de cet objet (drive)
    myFilesPromise.then((myFiles) => {
        console.log(myFiles)
        res.send(myFiles)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//module.exports = app; //exporter pour pouvoir y acceder avec notement notre serveur node