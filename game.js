
// Suzdavame promenlivi
let stypkaVrag=[], brVragove, towerX=[], towerY=[], brTowers, paveY=[], paveX=[];

function init() {
    brVragove=70;
    brTowers=0;
    for(let v=0;v<brVragove; v++){
        stypkaVrag[v]=v*(-randomInteger(200));
    }  
}

function update() {
    for(let v=0;v<brVragove; v++){
        stypkaVrag[v]=stypkaVrag[v]+1;
    }
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    for(let v=0;v<brVragove; v++){
        stypkaVrag[v]=v*(-randomInteger(50));
    }

    for(let t=0; t<brTowers;t++){
        drawImage(house[0], towerX[t], towerY[t], 50, 50);
    }
    for(let v=0; v<brVragove; v++){
        drawImage(tank[2], towerX[v], towerY[v], 50, 50);
    }
}

function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    towerX[brTowers]=mouseX;
    towerY[brTowers]=mouseY;
    brTowers++;
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}