import fs = require("fs");

const folderStructure : FolderGenerator[] = [
    {
        mainFolder: "core/",
        subFolders:[
            "error",
            "network",
            "usecases",
            "util",
            "navigation",
            "presentation"
        ]
    },
    {
        mainFolder: "features/",
        subFolders: []
    }
]

const featureFolders : FolderGenerator[] = [
    {
        mainFolder: "data/",
        subFolders: [
            "datasources/",
            "models/",
            "repositories/"
        ]
    },
    {
        mainFolder: "domain/",
        subFolders: [
            "entities/",
            "repositories/",
            "usecases/"
        ]
    },
    {
        mainFolder: "presentation/",
        subFolders: [
            "controllers/",
            "pages/",
            "widgets/"
        ]
    }
]

interface FolderGenerator{
    mainFolder: string;
    subFolders: string[]
}

function createPaths(basePath: string, obj: FolderGenerator[]){
    let list: string[] = [];

    obj.forEach(fg => {
        list.push(basePath + fg.mainFolder)

        fg.subFolders.forEach(sf=>{
            list.push(basePath + fg.mainFolder + sf)
        })
    });

    return list
}

function createFolders(paths: string[]) {
    paths.forEach(path => {
        fs.mkdirSync(path) 
    });

}

export function initPackages(){
    let paths = createPaths("lib/", folderStructure)

    createFolders(paths);    
}

export function createFeature(featureName: string){
    let paths = createPaths("lib/features/"+featureName+"/", featureFolders)

    createFolders(paths);   
}