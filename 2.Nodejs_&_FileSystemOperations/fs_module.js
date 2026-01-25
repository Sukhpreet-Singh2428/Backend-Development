const fs = require('node:fs');

//TODO : writefile, appendfile, copyfile, rename, unlink

//? fs.writeFile(file, data[,options], callback)    callback means function
// fs.writeFile("hey.txt", "hey hello kaise ho", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

//? appendfile
// fs.appendFile("hey.txt", " mai to achha tu", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

//? rename
// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

//? copyFile
// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

//? unlink  [delete file]
// fs.unlink("hello.txt", function(err){
    // if(err) console.error(err);
    // else console.log("done");
// })

//? rmdir  [it delete empty directory directly not non-empty]
//? to delete non-empty directory we add object {recursive: true}
// fs.rmdir("./copy", {recursive: true} , function(err){
    // if(err) console.error(err);
    // else console.log("done");
// })

//? rm [it delete non-empty directory]
// fs.rm("./copy", {recursive: true}, function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })