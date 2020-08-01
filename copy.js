const  fs = require('fs')
const util = require('util');

const readDir = util.promisify(fs.readdir)
const readfile = util.promisify(fs.readFile)


//TODO : I need someway to identify image 
async function fileWalker (dir, callback = console.log) {
    let readMemberDir = readDir(dir)
    let personFolder = await readMemberDir.then((personFolder) => personFolder );
    let memberPromiseArr = []
    for (let i = 0 ; i < personFolder.length ; ++i){
        memberPromiseArr.push(readDir(`${dir}/${personFolder[i]}`))
    }
    let individualFolderData = await Promise.all(memberPromiseArr).then((data) => console.log(data))
    let individualData = [];
    let individualImage = [];
    for (let i = 0 ; i < personFolder.length ; ++i) {
        individualData.push(readfile(`${dir}/${personFolder[i]}/data.json`))
        individualImage.push((readfile(`${dir}/${personFolder[i]}/img.png`,'base64')))
    }
    let userData = await  Promise.all(individualData).then((data) => generateUserData(data));
    return userData;
    //  let userImage = await Promise.all(individualImage).then((data) => 
    
}
// new Blob(data[0],{type : 'image/png'})
function generateUserData (data) {
    // user data buffer as input 
    let userData  = {};
    for (let i = 0 ; i < data.length ; ++i) {
        let singleUserData = JSON.parse(data[i]);
        userData[singleUserData.id] = singleUserData;
    }
    return userData;
}

function generateImgeData (data) {

    let userImage = {};
    for (let i = 0 ; i < data.length ; ++i) {

    }
}

 fileWalker('./members').then((data) => {
    fs.writeFile('./dist/members.json', JSON.stringify(data),function(err) {
        console.log({err})
    })
 })






