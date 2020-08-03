const fs = require("fs");
const util = require("util");

const readDir = util.promisify(fs.readdir);
const delfile = util.promisify(fs.unlink);

let folderExist = false;
let dirFiles = [];

async function remove(dir) {
  let flag = fs.existsSync(dir);
  if (!flag) {
    fs.mkdir("./dist", function (err) {
      console.log(err);
    });
  } else {
    let dirFiles = await readDir(dir);
    let arr = [];
    for (let i = 0; i < dirFiles.length; ++i) {
      console.log(`${dir}/${dirFiles[i]}`);
      arr.push(delfile(`${dir}/${dirFiles[i]}`));
    }
    Promise.all(arr).then(() => {
      fs.rmdir("./dist", function (err) {
        if (err) console.log(err, "err");
        else
          fs.mkdir("./dist", function (err) {
            console.log("dir created");
          });
      });
    });
  }
}

remove('../dist');
