const {myReadFile, myWriteFile, myDeleteFile, username, myAppendFile}=require("./fileSync1")
myReadFile();
const data="MY FSD class";
myWriteFile(data);
myReadFile();
myAppendFile(data);
myReadFile()
myDeleteFile("dummy.txt")
console.log("user name=",username);