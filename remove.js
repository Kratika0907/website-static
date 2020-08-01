const fs = require('fs');
const util = require('util');

const readDir = util.promisify(fs.readdir)
const readfile = util.promisify(fs.readFile)
const delfile = util.promisify(fs.unlink)


let folderExist = false;
let dirFiles = [];

async function remove(dir) {
    let m = await readDir(dir);
    console.log(m)
    if (m.length) {
        folderExist = true;
        dirFiles = m;
    }
    else {
        folderExist = false;
    }
    if(!folderExist) {
        fs.mkdir('./dist', function(err) {
            throw new Error(err);
        })
    }
    else {
        console.log('else block')
        let arr = [];
        for (let i = 0 ; i < dirFiles.length ; ++i) {
            console.log(`${dir}/${dirFiles[i]}`)
            arr.push(delfile(`${dir}/${dirFiles[i]}`));
        }
        Promise.all(arr).then(() => {
            fs.rmdir('./dist', function(err) {
                if (err)  console.log(err, "err");
                else fs.mkdir('./dist', function(err) {
                    console.log('dir created')
                })
            })
        })
    }
}

remove('./dist')
// fs.readdir('./dist', function(err, data) {
//     if (err) {
//         folderExist = false
//     }
//     else {
//         dirFiles = data;
//         folderExist = true;
//     }
// })

// fs.rmdir('./dist' , function(err) {
//     if (err) {
//         fs.mkdir('./dist', function(err) {
//             if (err) console.log(err)
//             console.log('dir created')
//         })
//     }
// })