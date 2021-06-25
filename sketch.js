var mode = 0
var mgr
function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  mgr = new SceneManager()
  mgr.addScene(homescreen1)
  mgr.addScene(loginpage)


  mgr.showNextScene()
}


function draw() {
  mgr.draw()
}

function keyPressed()
{
    mgr.handleEvent("keyPressed");
}

function mousePressed()
{
    mgr.handleEvent("mousePressed");
}

// SCENES BELOW

function homescreen1(){

      this.draw = function(){
        background(255,255,255)
        fill(215, 215, 215)
        rect(22,24,183,35)
        let s = 'Food For All';
        fill(0,0,0)
        text(s, 30, 40, 70, 80); // Text wraps within text box


        loginbutton()
        aboutus()
        why()
        base()
        order()
        terms()
      }

      this.mousePressed = function(){
        console.log("pressed mouse on homescreen 1!")
        this.sceneManager.showNextScene()
      }

      this.keyPressed = function(){
        console.log(key)
      }

      function loginbutton(){
        fill(249, 247, 230)
        rect(230,24,57,35)
        let a = 'ABOUT US';
        fill(0,0,0)
        text(a, 30, 80, 70, 80);
      }
      function aboutus(){
        fill(255, 249, 238)
        rect(22,87,141,152)
      }
      function why(){
        fill(248, 244, 231)
        rect(176,260,111,137)
      }
      function base(){
        fill(196, 196, 196)
        rect(22,422,265,26)
      }
      function order(){
        fill(250,250,250)
        rect(29,427,119,15)
      }
      function terms(){
        fill(250,250,250)
        rect(163,427,119,15)
      }


}

function loginpage(){

  this.mousePressed = function(){
    console.log("logged in!")
    //this.sceneManager.showNextScene()
  }

  this.draw = function(){
    background(255,255,255)
    log()
    email()
    password()
  }

  function log(){
    fill(250,250,250)
    rect(46,294,288,179)
  }
  function email(){
    fill(228,229,229)
    rect(70,325,244,36)

  }
  function password(){
    fill(228,229,229)
    rect(70,392,244,36)

  }

}
