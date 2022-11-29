// Check if a number is prime or not

//let num = 13;

if(num == 1)
{
    console.log("No");
    return;
}
for(let i = 2; i < num; i++)
{
    if(num % i == 0)
    {
        console.log("No");
        return;
    }
}

console.log("Yes");
