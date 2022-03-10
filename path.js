//"C:\Users\negir\Desktop\FJP6\module2\javascript\nodejs\path.js"

let path = require('path');

//console.log(path);

// let extensionName = path.extname("C:\Users\negir\Desktop\FJP6\module2\javascript\nodejs\path.js");
// //console.log(extensionName);

// let baseName = path.basename("C:\Users\negir\Desktop\FJP6\module2\javascript\nodejs\path.js");
// console.log(baseName);

// console.log(__dirname);     //   returns path directory
// console.log(__filename);    //   returns file directory

let dirPath = __dirname;

let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);

    
