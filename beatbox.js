// sound 1
 var a = document.getElementById("box1"); 
 var b = document.getElementById("sound1");
 function playSound(){
       if(b.paused){
             b.play();
       }
       else{
             b.pause();
       }
 }
 a.addEventListener("click", playSound)

// sound2
var c = document.getElementById("box2"); 
var d = document.getElementById("sound2");
function play2(){
      if(d.paused){
            d.play();
      }
      else{
            d.pause();
      }
}
c.addEventListener("click", play2)

// sound 3
var e = document.getElementById("box3"); 
var f = document.getElementById("sound3");
function play3(){
      if(f.paused){
            f.play();
      }
      else{
            f.pause();
      }
}
e.addEventListener("click", play3)

// sound 4
var g = document.getElementById("box4"); 
var h = document.getElementById("sound4");
function play4(){
      if(h.paused){
            h.play();
      }
      else{
            h.pause();
      }
}
g.addEventListener("click", play4)

// sound 5
var i = document.getElementById("box5"); 
var j = document.getElementById("sound5");
function play5(){
      if(j.paused){
            j.play();
      }
      else{
            j.pause();
      }
}
i.addEventListener("click", play5)

// sound 6
var k = document.getElementById("box6"); 
var l = document.getElementById("sound6");
function play6(){
      if(l.paused){
            l.play();
      }
      else{
            l.pause();
      }
}
k.addEventListener("click", play6)

// sound 7
var m = document.getElementById("box7"); 
var n = document.getElementById("sound7");
function play7(){
      if(n.paused){
            n.play();
      }
      else{
            n.pause();
      }
}
m.addEventListener("click", play7)

// sound 8
var o = document.getElementById("box8"); 
var p = document.getElementById("sound8");
function play8(){
      if(p.paused){
            p.play();
      }
      else{
            p.pause();
      }
}
o.addEventListener("click", play8)

// sound 9
var q = document.getElementById("box9"); 
var r = document.getElementById("sound9");
function play9(){
      if(r.paused){
            r.play();
      }
      else{
            r.pause();
      }
}
q.addEventListener("click", play9)

var fill = document.getElementById("box1");
function colorChange(){
      document.getElementById("box1").style.color = 'red';
}
fill.addEventListener("click",colorChange )