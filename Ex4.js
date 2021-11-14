const fs = require('fs')
var arr=[''];
var count=0;
var max=0;
fs.readFile('hi.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  arr=data.split('.');
  for(var i=0;i<arr.length;i++)
  {console.log("The length of the sentence is "+(arr[i]).length);
   count+=((arr[i]).length);
if(arr[i].length>max)
max=arr[i].length
}
 

count=count/(arr.length-1)
console.log(count)
 console.log(max)
//   console.log(data)
})
