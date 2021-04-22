//sur openclassroom c'est " app.js"


const express = require('express'); // importer express
const drive = require('./drive'); // importer drive
const app = express(); // créer notre application appeler avec la module express
const port = 3000 // déclaration d'une variable port avec comme valeur 3000
app.use(express.static('frontend')) // express.static est une fonction intégré dans express 

app.get('/api/drive', (req, res) => {
    const myFilesPromise = drive.functionListFolder('.') // appel de la fonction de cet objet (drive)
    myFilesPromise.then((myFiles) => {
        console.log(myFiles)
        res.send(myFiles)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/api/drive', (req, res) => {
    console.log("OK", req.query)
    const myCreateFolder = drive.functionCreateFolder(req.query.name)
    myCreateFolder.then((myFolder) => {
        console.log(myFolder)
        res.end(myFolder)
    })

})

app.delete('/api/drive/:name', (req, res) => {
    const myDeleteFolder = drive.functionDeleteFolder(req.params.name)
    myDeleteFolder.then((myDelete) => {
        res.send(myDelete)
    })


})

app.get('/api/drive/:name', (req, res) => {
    const name = req.params.name
    const isFilePromise = drive.functionisFile(name)
    isFilePromise.then((isFile) => {
        console.log(isFile)
        if (isFile) {
            let file = drive.functionDisplayContent(name);
            file.then((name) => {
                res.send(name)

            })
        } else {
            const myFilesPromise = drive.functionListFolder(name) // appel de la fonction de cet objet (drive)
            myFilesPromise.then((myFiles) => {
                console.log(myFiles)
                res.send(myFiles)
            })

        }

    })
})

//module.exports = app; //exporter pour pouvoir y acceder avec notement notre serveur node