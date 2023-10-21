function readTextFile(file) {
  // You have to install following package
  // npm install xmlhttprequest             -- to install package
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
              var allText = rawFile.responseText;
              console.log("~~~~~~~~~~~~~Here is your data form the file~~~~~~~~~")
              console.log(allText);
          }
      }
  }
  rawFile.send(null);
}

readTextFile("file://F:/Personal-GIT/JavaScript/File-Reading/test.txt");