const fs = require('fs')
const readline = require('readline');
var wArray=[''];
var unic=0;
var arr=[]
var cArr=[]
var flag=0;
function CountUnicWords(){
    var rl = readline.createInterface({
        input: fs.createReadStream('hi.txt'),
        output: process.stdout,
        terminal: false
    });
rl.on('line', function (line) {
arr=line.split(" ");
for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<wArray.length;j++)
  { if(arr[i]==wArray[j]) 
  {cArr[j]++;flag=1;break} 
 
}
if(!flag)
{
    wArray.push(arr[i]);
    cArr.push(1);
    
}   flag=0;
  
}

});
rl.on('close', function () {
    for(var i=0;i<=cArr.length;i++)
{if(cArr[i]=='1')
unic++;}
   console.log(wArray)
   console.log(cArr)
    console.log(unic); // print the result when the 'close' event is called
});
}
CountUnicWords();


