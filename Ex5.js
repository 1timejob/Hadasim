const fs = require('fs')
const readline = require('readline');
var wArray=[];
var arr=[]
var cArr=[]
var flag=0;
var flag2=0;
var max=0;
var word="";
var arr2=['that','the','dont','are','am','were','was']

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
  {cArr[j]++;flag=1;
    break} 
 
}
if(!flag)
{
    wArray.push(arr[i]);
    cArr.push(1);
    
}   flag=0;
  
}

});
rl.on('close', function () {
    for(var i=0;i<=cArr.length-1;i++)
{if(cArr[i]>max)
    {
        for(var j=0;j<arr2.length;j++)
        {
                if(wArray[i]==arr2[j])
               {flag2=1;
                console.log('the pupolar word is not correct!'+ wArray[i]+' '+arr2[j]); break;} 
        }
        if(flag2)
       {flag2=0;
        continue} 
        else
        {max=cArr[i]
        word=wArray[i];
       
        }

}
} console.log("The popular word is: "+word)
});
}
CountUnicWords();
