// Check if a string is palindrome or not

//let str = "aaa";

let _str = "";
for(let i = str.length - 1; i >= 0; i--)
{
    _str += str[i];
}

if(str == _str)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
