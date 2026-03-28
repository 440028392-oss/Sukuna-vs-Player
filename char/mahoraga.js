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