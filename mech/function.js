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

function mahoraga () {
    bigragacd = 10
    if (sukatk === 1) 
    {
        playerAttack("Punch", 15 + bigragadmgbuff)
        bigragacd-= 1
        bigragadmgbuff+=1 
    }
    else if (sukatk === 2)
    {
        playerAttack("Cut", 20 + (bigragadmgbuff * 2))
        bigragacd-= 1
        bigragadmgbuff+= 1
    }
    else if (sukatk === 3)
    {
        playerAttack("Stab", 25 + (bigragadmgbuff * 3))
        bigragacd-= 1
        bigragadmgbuff+= 1
    }
    else if (sukatk === 4)
    {
        playerAttack("Car Throw", 40 + (bigragadmgbuff * 10))
        bigragacd-= 1
        bigragadmgbuff+=1
    }
}
