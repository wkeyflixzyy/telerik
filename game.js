
// Suzdavame promenlivi
let tipVPole=[], razmerX, razmerY, kvPx, brTipove, klX, klY, br, br1, brtochki;
let nivo2=false;
function init() {
    //Kodut tuk se izpulnqva vednuj v nachaloto
    razmerX=6;
    razmerY=6;
    kvPx=600/razmerY;
    brTipove=3;
    brtochki=0;
    for(let x=0; x<razmerX; x++){
        tipVPole[x]=[]
        for(let y=0; y<razmerY; y++){
            tipVPole[x][y]=1+randomInteger(brTipove);
        }
    }
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 10000000; i=i+1) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
function update() {
    sleep(200)
    for(let x=0; x<razmerX; x++){
        if(tipVPole[x][0]==0){
            tipVPole[x][0]=1+randomInteger(brTipove);
        }
        for(let y=1; y<razmerY; y++){
            if(tipVPole[x][y]==0){
                tipVPole[x][y]=tipVPole[x][y-1];
                tipVPole[x][y-1]=0;
            }
        }
    }
}

function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    for(let x=0; x<razmerX; x++){
        for(let y=0; y<razmerY; y++){
            for(let k=0; k<brTipove+1; k++){
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

    context.fillStyle="blue";
    context.font="40px Elephant";
    context.fillText("Tochki", 650, 150);
    context.fillText(brtochki, 650, 200);
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
    if(br>1){
        brtochki=brtochki+br;
        for(let d=0; d<br; d++){
        tipVPole[klX+d][klY]=0;}
    }
    if(brtochki>30 && nivo2==false){
       razmerX=10;
       razmerY=10;
       kvPx=600/razmerX;
       for(let x=0; x<razmerX; x++){
        tipVPole[x]=[]
          for(let y=0; y<razmerY; y++ ){
            tipVPole[x][y]=1+randomInteger(brTipove);
          }
       }
       nivo2=true
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