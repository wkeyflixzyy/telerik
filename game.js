
// Suzdavame promenlivi
let tipVPole=[], razmerX, razmerY, kvPx, brTipove, klX, klY, br, br1;

function init() {
    //Kodut tuk se izpulnqva vednuj v nachaloto
    razmerX=6;
    razmerY=6;
    kvPx=600/razmerY;
    brTipove=3;
    for(let x=0; x<razmerX; x++){
        tipVPole[x]=[]
        for(let y=0; y<razmerY; y++){
            tipVPole[x][y]=randomInteger(brTipove);
        }
    }
}

function update() {
    //Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
   
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    for(let x=0; x<razmerX; x++){
        for(let y=0; y<razmerY; y++){
            for(let k=0; k<brTipove; k++){
                if(tipVPole[x][y]==k){
                    drawImage(gem[k], x*kvPx, y*kvPx, kvPx, kvPx );
                }
            }
            /*if(tipVPole[x][y]==0){
                drawImage(gem[1],x*kvPx, y*kvPx, kvPx, kvPx);
            }
            if(tipVPole[x][y]==1){
                drawImage(gem[2], x*kvPx, y*kvPx, kvPx, kvPx);
            }
            if(tipVPole[x][y]==2){
                drawImage(gem[3], x*kvPx, y*kvPx, kvPx, kvPx);
            } */
        }
    }
}

function mouseup() {
    klX=Math.floor(mouseX/kvPx);
    klY=Math.floor(mouseY/kvPx);
    console.log("Red=", klY, "Kolona=", klX);
    br=0;
    br1=0;
    while(klX+br<razmerX && tipVPole[klX+br][klY]==tipVPole[klX][klY]){
        br++;
    }
    while(klX-br1>=0 && tipVPole[klX-br1][klY]==tipVPole[klX][klY]){
        br1++;
    }
    console.log("Broi ednakvi=", br);
    console.log("Broi ednakvi=", br1);
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}