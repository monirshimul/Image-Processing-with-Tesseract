var Tesseract = require('tesseract.js')


Tesseract.recognize("./NID6.jpg")
       .progress(function  (p) { console.log('progress', p)    })
       .then(function (result) {
           console.log("Raw result..............................");
           console.log(result.text);
           var strArr = result.text.split(/[ ,\n]/);
           console.log("Splitted result......................");
           console.log(strArr);
       })