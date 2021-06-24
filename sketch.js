var mode = 0

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background(255,255,255)
}
setup()


function draw() {
  // put drawing code here
  if (mode === 0) {
     homescreen1()
   } else if (mode === 1) {
     loginpage()
   } else if (mode === 2) {
     secret()
   }

  function homescreen1(){
      rect(22,24,183,35)
      fill(249, 247, 230)

      function loginbutton(){
        rect(230,24,57,35)
        fill(255, 249, 238)
      }
      function aboutus(){
        rect(22,87,141,152)
        fill(255, 249, 238)
      }
      function why(){
        rect(176,260,111,137)
        fill(215,215,215)
      }
      function base(){
        rect(22,422,265,26)
        fill(255,255,255)
      }
      function order(){
        rect(29,427,119,15)
        fill(255,255,255)
      }
      function terms(){
        rect(163,427,119,15)
        fill(196,196,196)
      }
      loginbutton()
      aboutus()
      why()
      base()
      order()
      terms()
    }

    function loginpage(){
      function log(){
        rect(22,290,288,179)
        fill(228,229,229)
      }
      function email(){
        rect(45,305,244,36)
        fill(228,229,229)
      }
      function password(){
        rect(45,372,244,36)
        fill(225,225,225)
      }
      log()
      email()
      password()
    }
  }

function mousePressed() {
  if (mode === 0) {
    mode = 1;
  } else if (mode === 1) {
    mode = 2;
  } else if (mode === 2) {
    mode = 0;
  }
}


draw()
