sukatk = Math.floor(Math.random() * 4) + 1;
if (sukhp < 100 && sukrctusenmbr > 0)
{
    sukhp+= 70
    alert("Sukuna regained 70 HP!")
    if (sukrctusenmbr === 5)
    {
        sukrctusenmbr = 4
    }
    else if (sukrctusenmbr === 4)
    {
        sukrctusenmbr = 3
    }
    else if (sukrctusenmbr === 3)
    {
        sukrctusenmbr = 2
    }
    else if (sukrctusenmbr === 2)
    {
        sukrctusenmbr = 1
    }
    else if (sukrctusenmbr === 1)
    {
        sukrctusenmbr = 0
    }
}
else if (sukatk === 1 && slshcd === 1 || slshcd === 1 && fugcd > 1)
{
    sukunaAttack("Slash", 10)
    fugcd = 1
    clevecd = 1
    slshcd = 2
    sukdomaintime-= 1
}
else if (sukatk === 2 && clevecd === 1 || clevecd === 1 && slshcd === 2)
{
    sukunaAttack("Cleave", 15)
    slshcd = 1
    clevecd = 2
    if (fugcd === 2)
    {
        fugcd = 1
    }
    fugcd = 2
    sukdomaintime-= 1
    
}
else if (fugcd === 1 && sukatk === 3)
{
    sukunaAttack("Fuga", 25)
    fugcd = 3
    sukdomaintime-= 1
}
else if (sukatk === 4 && ismlvlntshrne === 0)
{
    ismlvlntshrne = 1
    sukdomaintime = 5
}
