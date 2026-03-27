if (playerchar === 2)
{
    let playerchoice=prompt("Choose Megumi's attack, 1 for Rabbit Escape, 2 for Nue, 3 for Mahoraga, 4 for Domain, 5 for RCT");
if (playerchoice === "1" && rabesccd === 1) {
    
    alert("Summon is on cooldown. use Nue to reset")
    rabesccd = 2
    nuecd = 1
    bigragacd = 1
    playerdomaintime-= 1
    if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
}
else if (playerchoice === "2" && nuecd === 1) 
{
    playerAttack("Nue", 0)
    alert("Summon is on cooldown. summon Rabbit Escape to reset")
    nuecd = 2
    rabesccd = 1
    if (bigragacd === 2)
    {
        bigragacd = 1
    }
    bigragacd = 2
    playerdomaintime = playerdomaintime - 1
    if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
}
     
 else if (playerchoice === "3" && hpcd === 1) 
 {
     playerAttack("Summoned Mahoraga: Eighth Divine General", 0)
     alert("Summon is on cooldown. Summon Rabbit Escape once or Nue twice to reset")
     bigragacd = 3
     playerdomaintime= playerdomaintime - 1
     
     if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
 }
else if (playerchoice === "4" && isdomainxpnshn === 0) {
    alert("Megumi used Chimera Shadow Garden!")
    isdomainxpnshn = 1
    playerdomaintime = 5
    if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
    
}
else if (playerchoice === "5" && playerhp < 51 && playerrctusenmbr > 0)
{
    playerhp+= 50
    alert("Megumi regained 50 HP!")
}
else if (playerchoice === "1" && revrdcd > 1)
{
    alert("sorry, this move is on cooldown. Missed a turn")
}
else if (playerchoice === "2" && lapblucd > 1)
{
    alert("sorry, this move is on cooldown. Missed a turn")
}
else if (playerchoice === "3" && hpcd > 1)
{
    alert("sorry, this move is on cooldown. Missed a turn")
}
else if (playerchoice === "4" && isdomainxpnshn === 1)
{
    alert("This domain is already in use. Missed a turn")
}
else if (playerchoice === "5" && playerrctusenmbr === 0 || playerchoice === "5" && playerhp > 50)
{
    alert("this would overcharge HP, as you can only use RCT when at or below 50HP. Missed a turn")
}
}
