// var fs = require('fs');
// var Lazy = require('lazy');
// var __ = require('underscore');

var variabele;
var ofzo = "kan ook";

variabele = 0;

var a = 10,
    b = 12;

variabele = a + b;

console.log(variabele);




















/*

if (variabele > 10) {
  console.log('yup, hoger dan 10', variabele);
}

*/


















/*
var values = [5, 3, 5, 5, 3, 1];
var result = __.uniq(values)
console.log( result );
*/


















/*

var values = [5, 3, 5, 5, 3, 1];
var result = __.each(values, function(x) {
  console.log(x);
})

*/









/*

var output = function(text) {
  console.log(text);
}

output("Hallo uit de functie");

*/




















// ##############################################

/*

Maar je kan ook zeggen
function output(text) { }

Er zijn meerdere manieren om een functie te declareren.
*/

/*

function som(a,b) {
  return a + b;
}

output( som(12,15) );

*/













// ##############################################

/*

function Broodje(param1, param2, callback) {
    console.log('Yum Yum, mijn broodje heeft ' ,param1 ,param2);
    callback();
}


Broodje('ham', 'kaas', function() {
    console.log('Klaar met mijn broodje');
});

*/














// ##############################################

/*
var file = "/etc/hosts";
var linecount = 0;

var lineReader = require('line-reader');

lineReader.eachLine(file, function(line, last) {
  linecount++;                                        // zelfde als linecount = linecount + 1;
  console.log(linecount, line);
});

*/




























// ##############################################

/*


fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

*/



























/*


var fs = require('fs');

var fn = 'test' //path.resolve(__dirname, 'settings.json')

fs.appendFile(fn, "Hey there!\n", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 

*/







 

































/*

var Parse = require('node-parse-api').Parse;

var APP_ID = "eiUSyEgtTk53OuYHAnxMigQRBAtwqPRRMqe4XRSh";
var MASTER_KEY = "POhGrSUi5PiWdwuJqyaazGwydYWRlod2TUCVPVSk";

var app = new Parse(APP_ID, MASTER_KEY);

// add a Foo object, { foo: 'bar' }
app.insert('Foo', { foo: 'bar' }, function (err, response) {
  console.log(response);
});
*/


