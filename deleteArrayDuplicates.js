let arr = [1,2,2,3,4,4,4,4,5,5];
let arr1 = arr;
let newarr = new Array();
let count=0;
newarr = arr.filter( (val,index) => {
     if(val === (arr1.reduce( (total,val1)  => {
         return val1;} ) )
        { 
         count=count+1;
        })
    if(count>1){ }
     
});

console.log(newarr);