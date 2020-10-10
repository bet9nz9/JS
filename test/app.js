let arr=new Array();
let min_num=0;
var counter=0;
for(let i=0;i<20;i++)
{
    arr.push(parseInt((Math.random()*(100-50)+50)));
    if(i==0)min_num=arr[i];
    if(+arr[i]<+min_num && arr[i] % 2 == 0){
        min_num=arr[i];
        counter++;
    };
}
console.log(arr);
console.log(counter);
if(counter==0)console.log(arr[0]);
else console.log(min_num);