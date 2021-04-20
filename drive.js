const fs = require('fs/promises') // fs devient un objet
function listFolder() {
    const readPromise = fs.readdir('.', { withFileTypes: true })
    const transformResultPromise = readPromise.then((dirents) => {
        const alpsDriveFiles = []
        dirents.forEach(dirent => {
            alpsDriveFiles.push({
                name: dirent.name,
                isFolder: dirent.isDirectory()
            })

        });
        return alpsDriveFiles;
    })
    return transformResultPromise;
}

module.exports = { //création d'objet
    functionListFolder: listFolder // le nom de la fonction : la fonction
}