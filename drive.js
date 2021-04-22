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

function createFolder(name) {
    const myCreateFolderPromise = fs.mkdir(name)
    return myCreateFolderPromise
}

function deleteFolder(name) {
    const myDeleteFolderPromise = fs.rmdir(name)
    return myDeleteFolderPromise
}

function isFileOrFolder(name) {
    const isFileOrFolderPromise = fs.stat(name) // Donne les infos
    console.log(isFileOrFolderPromise)
    return isFileOrFolderPromise
}

function displayContent(name) {
    const read = fs.readFile(name, "utf8", function(err, data) {
        if (err) {
            return console.log(err)
        }
    })
    return read
}

module.exports = { //création d'objet
    functionListFolder: listFolder, // le nom de la fonction : la fonction
    functionCreateFolder: createFolder,
    functionDeleteFolder: deleteFolder,
    functionisFileOrFolder: isFileOrFolder,
    functionDisplayContent: displayContent
}