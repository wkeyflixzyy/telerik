let paveX=[], paveY=[], stypkaVrag, towerX, towerY, power=100, points=0, nomer, patronX, patronY;
function init() {
    stypkaVrag=0;
    for(let i=0;i<500;i++)
    {
        paveX[i]=100;
        paveY[i]=i;
    }
    for(let i=0;i<300;i++)
    {
        paveX[500+i]=100+i;
        paveY[500+i]=500;
    }
    for(let i=0;i<200;i++)
    {
        paveX[800+i]=400;
        paveY[800+i]=500-i;
    }
    for(let i=0;i<100;i++)
    {
        paveX[1000+i]=400-i;
        paveY[1000+i]=300;
    }
    for(let i=0;i<200;i++)
    {
        paveX[1100+i]=300;
        paveY[1100+i]=300-i;
    }
    for(let i=0;i<400;i++)
    {
        paveX[1300+i]=300+i;
        paveY[1300+i]=100;
    }
    for(let i=0;i<300;i++)
    {
        paveX[1700+i]=700;
        paveY[1700+i]=100+i;
    }
    for(let i=0;i<200;i++)
    {
        paveX[2000+i]=700+i;
        paveY[2000+i]=400;
    }
    nomer=randomInteger(2200);
}
function pointDistance(cx1, cy1, cx2, cy2){
return Math.sqrt ((cx1-cx2)*(cx1-cx2)+(cy1-cy2)*(cy1-cy2));
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    stypkaVrag+=2;
    if(areColliding(towerX, towerY, 50, 80, paveX[stypkaVrag], paveY[stypkaVrag], 50, 50))
    {
        power--;
        console.log("Power=", power);
        if(power<=0)
        {
            stypkaVrag=0;
            power=100;
            points++;
            console.log("Points=", points);
        }
    }
    if(stypkaVrag==2200)
    {
        stypkaVrag=0;
    }
    R=pointDistance(stypkaVrag, stypkaVrag, patronX, patronY);
    patronX=patronX-(stypkaVrag-patronX)/R;
    patronY=patronY-(stypkaVrag-patronY)/R;
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    //drawImage(backField, 0, 0, 800, 600);
    for(let i=0;i<2200;i++)
    {
        drawImage(powerupYellow, paveX[i], paveY[i], 50, 50);
    }
    drawImage(tank[6], paveX[stypkaVrag], paveY[stypkaVrag], 50, 50);
    drawImage(towerGreen3, towerX, towerY, 50, 80);
    drawImage(kufte, patronX, patronY, 30, 30);
}
function mouseup() {
    towerX=mouseX;
    towerY=mouseY;
    patronX=towerX;
    patronY=towerY;
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}