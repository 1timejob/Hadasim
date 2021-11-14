const fs = require('fs')
const readline = require('readline');
var linesCount=0;
var WordsCount=0;
var words;
var maxcharacter=0;

function CountLines(){
    var rl = readline.createInterface({
        input: fs.createReadStream('hi.txt'),
        output: process.stdout,
        terminal: false
    });
rl.on('line', function (line) {
    linesCount++; // on each linebreak, add +1 to 'linesCount'
});
rl.on('close', function () {
    console.log("The number of lines in the text is: "+linesCount); // print the result when the 'close' event is called
});
}

function CountWords(){
    var rl = readline.createInterface({
        input: fs.createReadStream('hi.txt'),
        output: process.stdout,
        terminal: false
    });
    
    rl.on('line', function (line) {
    words=line.split() // on each linebreak,Creating a String array with the words in the line
    maxcharacter=words[0].length;
    var str=words[0]

  function Count(str) {
       for (var i = 0; i < maxcharacter; i++) 
       { 

            if (str[i]==" ") { // if a space is found in str totalSoFar = +1;
            WordsCount+=1;
          }       
};
WordsCount+=1;

};
Count(str);
    });
    rl.on('close', function () {
        console.log(WordsCount)
    });
};
CountWords();

CountLines();