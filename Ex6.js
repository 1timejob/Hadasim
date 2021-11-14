const fs = require('fs')
var letter='k';
var words=[0];
var k=0;
var j=0;
var max=0;
fs.readFile('hi.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    Exercise6(data)
  })

function Exercise6(data)
{
    for(var i=0;i<data.length;i++)
    {
        if(data[i]==letter)
           {j=i;
 for(j=j+1;j<data.length;j++)
{
if(data[j]==" ")
{
    words[k]++;
}
    if(data[j]==letter)
    {
        k++;
        words[k]=0;
        break;
    }
}
        
        } 
    }
 console.log(words)
    for(var i=0;i<words.length;i++)
    {if(words[i]>max)
    max=words[i];}
    console.log("The maximal sequence without K is: "+max)
}
