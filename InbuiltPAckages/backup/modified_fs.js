const fs = require("fs") // syntax to import file system packages


//-----------------------------------Create Files-----------------------------------------------------------

// const quote = "No beauty shines better than that of a good heart"

// fs.writeFile("awesome.js", quote, (err) => {
//     console.log("Completed writing awesome.txt")   //awsome.js will be created with quote
// })


//Task -1

const quote2 = "Live more worry less"
//create below file with quote2 as content
// in backup folder/
// text-1.html
// text-2.html
// text-3.html
// ...
// text-10.html

// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log(`Completed writing text-${i}.html`)
//     })
// }

//Task-2
//node fs.js 20 => 20 files to be created || note-1.txt..note-20.txt

const [, , noOfFiles] = process.argv

console.log(noOfFiles)

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/note-${i}.txt`, quote2, (err) => {
//         console.log(`Completed writing note-${i}.txt`)
//     })
// }

//----------------------------------------------Read File---------------------------------------------------


// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error❌", err)
//     }
//     console.log(data)
// })

///------------------------------------------append to the existing file----------------------------------------------

// const content = "\nAll is Well"
// fs.appendFile("./cool.txt", content, (err) => {
//     console.log("Completed writing cool.txt")
// })

//---------------------------------------------delete file----------------------------------------------------
 // for example toRemove.txt file is created
// fs.unlink("./toRemove.txt", (err) => {
//     console.log("Deleted file successfully")
// })

//--------------------------------------------Read Directory shows all files in it----------------------------

// fs.readdir("./backup", (err, files) => {
//     console.log("All file names are", files)
// })

//----------------------------------------------delete all files in backup folder

// fs.readdir("./backup", (err,files) => {
//     files.forEach(fileName => {
//         fs.unlink(`./backup/${fileName}`, (err) => {
//             console.log(`Deleted successfully ${fileName}`)
//         })

//     })
// })

// writeFile => CallStack => WebApi(whoever finishes writing first) => CallBack Q => Event Loop => CallStack

// fs.writeFile, fs.readFile, fs.appendFile, fs.unlink => async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync => sync



// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFileSync(`./backup/note-${i}.txt`, quote2)
//     console.log(`Completed writing note-${i}.txt`)
// }