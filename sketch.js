let clockFont;
var clr;
var Iinput;
var reply;
var ctc;
var namebox;
var name;
var ld,ld1,hello,bye;
var popat;
var lion,parrot,dog,cat;
var search;

function preload(){
  ld1=loadImage("oops.jpg");
   ld=loadImage("what_.jpg");
  hello=loadSound("hello.mp3");
  bye=loadSound("bye.mp3");
  lion=loadSound("lion.mp3");
  parrot=loadSound("parrot.wav");
  dog=loadSound("dog.mp3");
  cat=loadSound("cat.mp3")
  popat=loadImage("popat.jfif");
}
function setup() {
  createCanvas(400, 400);
  clockFont = loadFont("digital-7.ttf");
  clr=createColorPicker("white");
  ctc=createColorPicker("black");
  Iinput=createInput("");
  Iinput.input(Bot);
  namebox=createInput("enter your name here")
  namebox.input(namekeep);
  namebox.position(100,405);
  search=createButton("search on google");
}

function draw() {
  background("lime");
  fill(ctc.color());
  clock();
  textFont("Arial", 35);
  textAlign(LEFT,LEFT); 
    shpopat=image(popat,0,0,100,100);
  
  textSize(15);
  text("type help for list of commands",10,120)
  if(reply=="are you dumb"){
    text("No, I am smarter than u",10,350);
  }
  if(reply=="what os do you use"){
    text("I use your os",10,350)
  }
  if(reply=="sup"){
     text("sup",10,350);
     }
  if(reply=="do you go to school"||reply=="do you go to work"){
     text("no, do you?",10,350);
     }
    if(reply=="hello"||reply=="hello popat"||reply=="hi"||reply=="who are you"){
    text("Popat: welcome "+name+ " I am popat an bot made by ParameshCodes",10,350,390,400);
    }
  
  if(reply=="bye"){
     text("Popat: bye "+name+" see you afterwards",10,350,390,400);
  }
  if(reply=="/kill"){
    fill("lime")
    rect(0,0,100,100);
    
  }
  if(reply=="change name"){
    namebox.show();
  }
  if(reply==""){
    text("please type with no captialisation and punctuation do put space between words",10,350,390,400);
  }
  textSize(100);
  if(reply==":)"){
    text("😄",10,350);
  }
  else if(reply==":("){
     text("😭",10,350);
  }
  else if(reply=="XD"){
     text("😆",10,350);
  }
  else if(reply==":|"){
      text("😑",10,350);
  }
  else if(reply==":D"){
      text("😁",10,350);
  }
  else if(reply==":X"){
     text("😶",10,350);
  }
  textSize(15);
    if(reply=="123456789"){
      text("abcdefghi",10,350)
    }
    if(keyCode==ENTER&&name!="enter your name here"){
    namebox.hide();
  }
  if(reply=="what"){
    text("Pardon me",10,350)
  }
  if(reply=="memes"||reply=="show memes"){
  text("ok",10,350);
  image(ld,10,10,300,200)
  image(ld1,30,210,280,180)
  }
  search.mousePressed(gos);
}

function Bot(){
  reply=this.value();
  if(reply=="help"){ window.open("https://docs.google.com/document/d/13wmia6S1T85P0wxnU8s-VdzXVSGJFoZaGaXEVpjKG2I/edit?usp=sharing")
  }
  if(reply=="what sound does a lion make"||reply=="make the sound of a lion"||reply=="imitate a lion"||reply=="what sound does a tiger make"||reply=="make the sound of a tiger"||reply=="imitate a tiger"){
    lion.play();
  }
    if(reply=="what sound does a parrot make"||reply=="make the sound of a parrot"||reply=="imitate a parrot"||reply=="what sound does a macaw make"||reply=="make the sound of a macaw"||reply=="imitate a macaw"){
    parrot.play();
  }
      if(reply=="what sound does a dog make"||reply=="make the sound of a dog"||reply=="imitate a dog"){
    dog.play();
  }
      if(reply=="what sound does a cat make"||reply=="make the sound of a cat"||reply=="imitate a cat"){
    cat.play();
  }
    if(reply=="bye"){
   bye.play();
  }
      if(reply=="hello"||reply=="hello popat"||reply=="hi"||reply=="who are you"){
  hello.play();
    }
      if(this.value()=="/open gmail"){
 window.open("https://mail.google.com/mail/u/0/");
  }
        if(this.value()=="/open new tab"){
 window.open("https://www.google.com/");
  }
          if(this.value()=="/open skype"){
 window.open("https://web.skype.com/");
  }
        if(this.value()=="/open excel"){
 window.open("https://www.office.com/launch/excel");
  }
        if(this.value()=="/open word"){
 window.open("https://www.office.com/launch/word");
  }
          if(this.value()=="/open powerpoint"){
 window.open("https://www.office.com/launch/powerpoint");
  }
    if(this.value()=="i want to play a game"||this.value()=="/open games"){
    window.open("https://editor.p5js.org/Paramesh/full/g7Ky2WBWH")
}
   if(this.value()=="/set timer"||this.value()=="/set a timer"||this.value()=="/open timer"){
     window.open("https://realparamesh.github.io/Timer/");
   }
  if(this.value()=="/open notepad"||this.value()=="/open text editor"){
    window.open("https://realparamesh.github.io/Text-editor/")
  }
    if(this.value()=="/open rubix stimer"||this.value()=="/open rubix app"){ window.open("https://realparamesh.github.io/Rubixs-Stimer/")
  }
}

function namekeep(){
  name=this.value();
  console.log(name);
}


function gos(){
  window.open("https://www.google.com/search?safe=active&source=hp&ei=11-2X-XRIpq9rQH93rnIAg&q="+reply+"&oq="+reply+"&gs_lcp");
}

function clock(){
  rect(100,0,400,100);
  textFont(clockFont);
  textAlign(CENTER, CENTER);
  textSize(width/5.5);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  fill(clr.color());
  text(Hour+":"+min+":"+secs+noon, 250,50); 
}
