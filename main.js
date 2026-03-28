let sukdmgmult = 0.75; //dmgmult is damage multiplier, suk is Sukuna
let playerdmgmult= 1.1; //player is player
let rabescmult = 0.5
let nuemult = 1.2
let bigragamult = 5
let rabescdmg = 1
let nuedmg = 1
let bigragadmg = 1
let sukdmg = 1; //dmg is base damage
let sukfinldmg = sukdmg * sukdmgmult;  //finldmg is the final damage
let rabescfinldmg = rabescdmg * rabescmult
let nuefnldmg = nuedmg * nuemult
let bigragafinldmg = bigragadmg * bigragamult
let playerdmg = 1
let playerfinldmg = playerdmg * playerdmgmult;
let sukhp = 300; // hp is health points
let playerhp = 100;
let sukatk = Math.floor(Math.random() * 4) + 1;
let playerchoice = 0
let isdomainxpnshn = 0
let ismlvlntshrne = 0; //this and the soon to be isdomainxpnshn are domain expansions and only buff dmgmult cause my computer cant handle malevolent shrine attacking
let playermisschance = 0
let sukmisschance = 0
let hpcd = 1  //cd = cooldown, hp = hollow purple(in this case)
let revrdcd = 1 // revrd = red
let lapblucd = 1 //lapblu = blue
let fugcd = 1 //fug = fuga
let slshcd = 1 //slsh = slash
let clevecd = 1 //cleve = cleave
let playerdomaintime = 0
let sukdomaintime = 0
let playerrctusenmbr = 5 //rct = reversed cursed technique
let sukrctusenmbr = 5
let domainclash = 0
let playerchar = 0
let rabesccd = 0
let nuecd = 0
let bigragacd = 0
let bigragadmgbuff = 0
let bigragahpbuff = 0


function sukunaAttack(name, basedmg) {
sukmisschance = Math.floor(Math.random() * 100) + 1
let sukfinldmg = basedmg * sukdmgmult
playerhp -= sukfinldmg
alert("Sukuna used " + name + " and dealt " + sukfinldmg + " damage!")
alert("player has " + playerhp + " HP!")
};

function playerAttack(name, basedmg) {
playermisschance = Math.floor(Math.random() * 100) + 1
let playerfinldmg = basedmg * playerdmgmult
sukhp -= playerfinldmg
alert("player used " + name + " and dealt " + playerfinldmg + " damage!")
alert("Sukuna has " + sukhp + " HP!") 

};

function battleTurn() {
    if (sukhp <= 0 || playerhp <= 0) {
        if (sukhp <= 0) alert("player wins!");
        else alert("Sukuna wins!");
        return;
}
}

function rabbitEscape() {
    alert("Megumi summoned Rabbit Escape!")
    rabescfinldmg = rabescmult * rabescdmg 
    for (let i = 0; i < 3; i++) {
        sukhp-= rabescfinldmg
        alert("Rabbit Escape bit Sukuna and dealt " + rabescfinldmg + " damage!")
    } 
    rabesccd = 5
    alert("Rabbit Escape dealt " + rabescfinldmg * 3 + " damage!")
    if (rabesccd <= 0)
    {
        alert("Rabbit Escape Despawned...")
    }
}

function nuE() {
    alert("Megumi summoned Nue!")
    nuefinldmg = nuemult * nuedmg 
    for (let i = 0; i < 1; i++) {
        sukhp-= nuefinldmg
        alert("Rabbit Escape bit Sukuna and dealt " + nuefinldmg + " damage!")
    } 
    nuecd = 5
    alert("Rabbit Escape dealt " + nuefinldmg + " damage!")
    if (nuecd <= 0)
    {
        alert("Nue Despawned...")
    }
}


if (rabesccd <= 0)
    {
        alert("Rabbit Escape Despawned...")
    }

if (nuecd <= 0)
    {
        alert("Nue Despawned...")
    }

if (bigragacd <= 0)
    {
        alert("Mahoraga Despawned...")
    }


function domainClash() 
{
    if (sukatk = playerchoice)
    {
       domainclash = Math.floor(Math.random() * 2) + 1
       if (domainclash = 1) 
       {
           ismlvlntshrne = 1
           isdomainxpnshn = 0
           alert("Sukuna won the Domain Clash...")
       }
       else if (domainclash = 2)
       {
           ismlvlntshrne = 0
           isinfntvoid = 1
           alert("Player won the Domain Clash!")
       }
    }
}

if (ismlvlntshrne === 1) {
        sukdmgmult = 1.5
        sukdomaintime = 5
    }
if (isdomainxpnshn === 1) {
        playerdmgmult = 2
        playerdomaintime = 5
    }





if (sukdomaintime >= 0) 
{
    alert("Malevolent Shrine has worn off!")
    ismlvlntshrne = 0
    sukdomaintime = 0
}

if (playerdomaintime >= 0) 
{
    alert("Domain Expansion has worn off!")
    isdomainxpnshn = 0
    playerdomaintime = 0
}



alert("player has " + playerhp + " HP!");
alert("Sukuna has " + sukhp + " HP!");
sukrctusenmbr = 5
playerrctusenmbr = 5





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




setTimeout(battleTurn, 100);





if (playerhp <= 0) {
    alert("Sukuna wins!");
    return;
}  

if (sukhp <= 0) {
    alert("player wins!");
    return; 
}






playerchar=prompt("1. Gojo 2. Megumi") 
if (playerchar === 2)
{
    let playerchoice=prompt("Choose Megumi's attack, 1 for Rabbit Escape, 2 for Nue, 3 for Mahoraga, 4 for Domain, 5 for RCT");
if (playerchoice === "1" && rabesccd === 1) {
    rabbitEscape()
    alert("Rabbit Escape has 1 cooldown. use Blue to reset")
    rabesccd = 2
    nuecd = 1
    bigragacd = 1
    playerdomaintime-= 1
    if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
}
else if (playerchoice === "2" && nuecd === 1 ) 
{
    nuE()
    alert("Nue is on cooldown. summon Rabbit Escape to reset")
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
     
 else if (playerchoice === "3" && bigragacd >= 1) 
 {
     
     alert("Mahoraga is on cooldown. summon Rabbit Escape once or Nue twice to reset")
     bigragacd = 3
     mahoraga()
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















if (playerchar = 1) 
{
let playerchoice=prompt("Choose player's attack, 1 for Red, 2 for Blue, 3 for Purple, 4 for Domain, 5 for RCT");
if (playerchoice === "1" && revrdcd === 1) 
    {
    playerAttack("Reversal Red", 10)
    alert("Reversal Red has 1 cooldown. use Blue to reset")
    revrdcd = 2
    lapblucd = 1
    hpcd = 1
    playerdomaintime-= 1
    if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
}
  
else if (playerchoice === "2" && lapblucd === 1 ) 
{
    playerAttack("Lapse Blue", 15)
    alert("Lapse Blue is on cooldown. use Red to reset")
    lapblucd = 2
    revrdcd = 1
    if (hpcd === 2)
    {
        hpcd = 1
    }
    hpcd = 2
    playerdomaintime = playerdomaintime - 1
    if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
}
     
 else if (playerchoice === "3" && hpcd === 1) 
 {
     playerAttack("Hollow Purple", 30)
     alert("Hollow Purple is on cooldown. use Red once or Blue twice to reset")
     hpcd = 3
     playerdomaintime= playerdomaintime - 1
     if (playerdomaintime >= 1)
    {
        alert("Your domain will turn off in " + playerdomaintime + " rounds.")
    }
 }
else if (playerchoice === "4" && isdomainxpnshn === 0) {
    alert("player used Infinite Void!")
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
    alert("player regained 50 HP!")
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

battleTurn() 
alert("---------------------------------------")