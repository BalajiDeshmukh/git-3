let str="balaji";
let rev="";
for(let i=str.length; i>=0; i--){

rev=rev+str[i];
}
if(rev==str){
console.log("pallindrome");
}
else{
console.log("not a palindrome");
}