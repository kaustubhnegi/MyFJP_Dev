 let fs = require("fs");
 let path = require("path");
// //console.log(fs);

// let path = require("path");

// // 1.Create
// let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);


// // 1. It creates file not exist
// // 2. Overrides existing file
// //fs.writeFileSync(filePath,"Hello I am a text file");              // filepath along with filename


// fs.writeFileSync(filePath,"Again writing on this file");
// // 2. Read
// let content  = fs.readFileSync(filePath,'utf-8');
// console.log("Before Update");
// console.log(content);

// // 3. Update

// fs.appendFileSync(filePath,". \nNewly Added Content");
// console.log("After Update");
// console.log(fs.readFileSync(filePath,'utf-8'));


// // 4. D- delete

// fs.unlinkSync(filePath

if(!fs.existsSync("hamariDirectory"))
    fs.mkdirSync("hamariDirectory");

    let folderPath = __dirname;

    let contentOfFolder = fs.readdirSync(folderPath);
    console.log(contentOfFolder);

    // delete a directory
    fs. rmdirSync("hamariDirectory");

    // copy a file

    let sourcePath      = path.join( __dirname,"file.txt");
    let destinationPath = path.join(__dirname,"module","file.txt");

    console.log(sourcePath);
    console.log(destinationPath);

    fs.copyFileSync(sourcePath,destinationPath);

    


