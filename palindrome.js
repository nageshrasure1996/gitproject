var no=12321;
temp=no;
var rev=0;
var rem;
while(temp!=0){
    rem=temp%10;
    rev=(rev*10)+rem;
    temp=parseInt(temp/10);
    }

if(no == rev)
{
    console.log(no +' ' +'is palindrome number');
}
else{
    console.log(no +' '+ 'is not palindrome number');   
}
