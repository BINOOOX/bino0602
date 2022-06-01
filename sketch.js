
//var showBino7=false;
//var showBino8=false;
//var showBino9=false;
//var showBino10=false;
//var showBino11=false;
//var showBino12=false;

//let bino;
//let bino1;
//let bino01;
var gif_loadImg, gif_createImg;
var useColors =["#000","#fff"]
let bubbles = [],
  sampleDraw,
  playRate;
let myCanvas
let loop;
let synth;
let animations = []; // array to store animations

var isKeyPressed = [false,false,false,false,false,false,false]
const vol = new Tone.Volume(-8).toDestination();
const chorus = new Tone.Chorus(4, 0.5, 0.5).toDestination().start();
const piano = new Tone.PolySynth().connect(vol);
const piano1 = new Tone.PolySynth().connect(vol);
const player = new Tone.Player("bino/bino1.mp3").toDestination();
const player2= new Tone.Player("bino/bino2.mp3").toDestination();
const player3= new Tone.Player("bino/bino3.mp3").toDestination();
const player4= new Tone.Player("bino/bino4.mp3").toDestination();
const player5= new Tone.Player("bino/bino4.mp3").toDestination();
const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
const tom = new Tone.MembraneSynth({
	octaves: 4,
	pitchDecay: 0.1
}).connect(feedbackDelay); 

const kick = new Tone.MembraneSynth({
  octaves: 5,
  envelope  : {
    sustain: 0.1,
  }
}).toDestination()
Tone.start()

const hihat = new Tone.NoiseSynth({
playbackRate: 9,
  envelope  : {
    sustain  : 0.00001,
  }
}).toDestination()
Tone.start()

function preload(){
  bino  = loadImage('bino/bino.png');
  bino0 = loadImage('bino/bino0.png');
  bino1 = loadImage('bino/bino07.png');
  bino2 = loadImage('bino/bino2.png');
  bino3 = loadImage('bino/bino4.png');
  bino4 = loadImage('bino/bino5.png');
  bino5 = loadImage('bino/bino6.png');
  bino6 = loadImage('bino/bino24.png');
  bino7 = loadImage('bino/bino04.png');
  bino8 = loadImage('bino/bino06.png');
  bino9 = loadImage('bino/bino09.png');
  bino10 = loadImage('bino/bino21.png');
  bino11 = loadImage('bino/bino20.png');
  bino12 = loadImage('bino/bino02.png');
  bino13 = loadImage('bino/bino09.png');
  bino14 = loadImage('bino/bino23.png');
  bino15 = loadImage('bino/bino16.png');
  bino16 = loadImage('bino/bino08.png');
  bino17 = loadImage('bino/bino10.png');
  bino18 = loadImage('bino/bino11.png');
  bino19 = loadImage('bino/bino12.png');
  //bino20 = createImg('bino/bino25.gif');
}
//let bbb = image(bino16,bino17,bino18,bino19);
//let bbbs = random(bbb);
function setup() {


  //myCanvas=createCanvas(windowWidth, windowHeight); 
  createCanvas(windowWidth, windowHeight);  
    for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
   }
  synth= new Tone.MembraneSynth({
    oscillator: {
      //type: "sine"
      //type: "square"
      //type: "triangle"
      //type: "sawtooth"
    }
  }).toDestination();

  synth= new Tone.NoiseSynth({
    oscillator: {
      //type: "sine"
      //type: "square"
      //type: "triangle"
      //type: "sawtooth"
    }
  }).toDestination();

   synth= new Tone.PolySynth({
    oscillator: {
      //type: "sine"
      //type: "square"
      //type: "triangle"
      //type: "sawtooth"
    }
  }).toDestination();
  
  Tone.start()
}


function startContext() {
  
   console.log("Tone is: ", Tone.context.state)
  document.body.addEventListener("click", () => {
    Tone.context.resume();
    console.log("Tone is: ", Tone.context.state);
  
  });
} 

function draw() {
 
	
  
  background(0);
  imageMode(CENTER);
  
  isKeyPressed = [false,false,false,false,false,false,false]
  image(bino6,windowWidth/2, windowHeight/2);
  
		// if one or more animations are in the array
    if (animations.length > 0) {
        // loop for read the array
        for (let i = 0; i < animations.length; i++) {
						// draw array's animations in order
            animations[i].draw();
            
        }
    }
  image(bino,windowWidth/2, windowHeight*0.8, 880,648 );
}

function keyTyped() {
    // if the key A is typed
    if (key == 'a') { 
       
        animations.push(new Key_A()); 
      Tone.start()
      kick.triggerAttackRelease("c2", 1);
      Tone.start()
    } else if (key == 'z') {
        
        animations.push(new Key_Z());
      Tone.start()
      hihat.triggerAttackRelease("8n");
      Tone.start()
    } else if (key == 'e') {
      
        
        animations.push(new Key_E());
        player.loop = true;
        player2.stop ();
        player3.stop ();
        player4.stop ();
        player.start ();
     
    } else if (key == 'r') {
        
        animations.push(new Key_R());
        player2.loop = true;
        player.stop ();
        player3.stop ();
        player4.stop ();
        player2.start ();
    } else if (key == 't') {
        
        animations.push(new Key_T());
        player3.loop = true;
        player.stop ();
        player2.stop ();
        player4.stop ();
        player3.start ();
    } else if (key == 'y') {
        
        animations.push(new Key_Y());
        player4.loop = true;
        player.stop ();
        player2.stop ();
        player3.stop ();
        player4.start ();
    }else if (key == 'u') {
      animations.push(new Key_U());
      player5.loop = true;
      player5.start();
    } else if (key == 'd') {
        
        animations.push(new Key_D());
      Tone.start()
      piano.triggerAttackRelease(["C3", "E3", "G3"], "8n");
    } else if (key == 'f') {
        
        animations.push(new Key_F());
      Tone.start()
      piano.triggerAttackRelease(["d3", "f3", "c4"], "8n");
    } else if (key == 'g') {
        
        animations.push(new Key_G());
      Tone.start()
      piano.triggerAttackRelease(["e3", "g3", "d4"], "8n");
    } else if (key == 'h') {
        
        animations.push(new Key_H());
      Tone.start()
      piano.triggerAttackRelease(["f3", "c4", "e4"], "8n");
    } else if (key == 'j'){
        animations.push(new Key_J());
      Tone.start()
      piano.triggerAttackRelease(["g3", "d4", "f4"], "8n");
    } 
}

function keyPressed(){
  
}

class Key_A {
   draw(){
     
     if (keyIsPressed)
     if (key=='a'){
        image(bino9, windowWidth/2, windowHeight/2);
     }

 }   
}

function keyReleased(){
  if (key == 'u'){
    player5.stop();
  }
}

class Key_Z {
  draw(){
     
     if (keyIsPressed)
     if (key=='z'){
        image(bino8, windowWidth/2, windowHeight/2);
     }

 }   
}


class Key_E {
  draw(){
  //myCanvas=createCanvas(windowWidth, windowHeight); 
  background(100,0,0);  
  //image(myCanvas,0,-10);
    push()
  beginShape()
  strokeWeight(20);
  noFill();
  for(let x=0;x<width;x+=3){
    let y= 
        sin(x/100+frameCount/100)*200+
        sin(x/30+frameCount/10)*100;
        //+noise(x/100,frameCount/50)
    //*height/4+height/2
    //*(map(sin(x/30),-1,1,0,1))
    vertex(x,height/2+y);
  }  
    stroke(200,map(sin(frameCount/3),-1,1,10,255));
    endShape()
    pop()
    
  image(bino2, windowWidth/2, windowHeight/2);
  image(bino,windowWidth/2, windowHeight*0.8, 880,648 );
  }  
 

}
class Key_R {
  draw(){
    background(25,100,200); 
   
  image(bino3, windowWidth/2, windowHeight/2);
  image(bino15,windowWidth/2,map(sin(deltaTime*0.05),-1,1,500,800));
  image(bino,windowWidth/2, windowHeight*0.8, 880,648 );
      if (frameCount == 140) {

  frameCount= frameCount-140
  }  
  }
}
class Key_T {
  setup(){

  }
  draw(){
  background(1,250,200);
  
  //image(bino,windowWidth/2, windowHeight*0.8, 880,648 );
  for (let i = 0; i < bubbles.length; i++) {
    
    bubbles[i].move();
    bubbles[i].show();
    image(bino4, windowWidth/2, windowHeight/2);
  }
   
   
}

}
class Key_Y {
  draw(){

  background(125,250,0)
    stroke(100,0,200)
    noFill()
    
    push()
    
    pop()
    for(var i=0;i<width;i+=100){
      push()
            translate(width/2,height/2)
    
            strokeWeight(0.8)
			beginShape()
			
			let rr = width-(i/8)
		
		
		
		
			for(var o=0;o<360;o+=4){
				 
				let ang = (o/1.1+i/100)+frameCount/(300+o)
		
				curveVertex(cos(ang)*rr,sin(ang)*rr)
			
            }
			endShape()
    pop()
  image(bino5, windowWidth/2, windowHeight/2);
  image(bino,windowWidth/2, windowHeight*0.8, 880,648 );
  }  
  }

}
class Key_U {
  setup(){
     let imgID = 0
   }
   draw(){
     
     if (keyIsPressed)
     if (key=='u'){
       this.imgID = floor(random(0,4.99))
       switch(this.imgID){
         case 0:
           image(bino13, windowWidth/2, windowHeight/2);
           break;
         case 1:
           image(bino16, windowWidth/2, windowHeight/2);
           break;
         case 2:
           image(bino17, windowWidth/2, windowHeight/2);
           break;
         case 3:
           image(bino18, windowWidth/2, windowHeight/2);
           break;
         case 4:
           image(bino19, windowWidth/2, windowHeight/2);
           break;
       }
     }
 }
}
class Key_D {
  
  draw(){
     
     if (keyIsPressed)
     if (key=='d')
        image(bino7, windowWidth/2, windowHeight/2);

 }
}

class Key_F {
  
  draw(){
     
     if (keyIsPressed)
     if (key=='f')
        image(bino10, windowWidth/2, windowHeight/2);

 }
}

class Key_G {
  
  draw(){
     
     if (keyIsPressed)
     if (key=='g')
        image(bino11, windowWidth/2, windowHeight/2);
 
    
  }
 
}

class Key_H {
  
  draw(){
     
     if (keyIsPressed)
     if (key=='h')
        image(bino12, windowWidth/2, windowHeight/2);

    
  }
 
}
class Key_J{
  
  draw(){
     
     if (keyIsPressed)
     if (key=='j')
        image(bino14, windowWidth/2, windowHeight/2);

    
  }
 

}

class Bubble {
  
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    
    
  }



  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(10,200,200);
    strokeWeight(4);
    fill(100,0,200);
    ellipse(this.x, this.y, this.r * 3);
  }
}