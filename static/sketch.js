var mode = 0
var mgr

function preload(){

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


// SCENES BELOW

function homescreen1(){
  this.setup = function(){
      col1 = color(249, 247, 230)
      btn = createButton("Login")
      btn.style('background-colour', col1)
      btn.position(230,24,57,35)
      btn.mousePressed(enter)

      col2 = color(255,255,255)
      btn2 = createButton("Forms")
      btn.style('background-colour', col2)
      btn2.position(29,427,119,15)
      btn2.mousePressed(form)
    }
    function enter(){
    mgr.showScene(loginpage)
    btn.hide()
    btn2.hide()
  }
    function form(){
    mgr.showScene(questionpage)
    btn2.hide()
    btn.hide()
    }

       this.draw = function(){
          background(255,255,255)
          fill(215, 215, 215)
          rect(22,24,183,35)
          let s = 'Food For All';
          fill(0,0,0)
          text(s, 30, 40, 70, 80); // Text wraps within text box

             aboutus()
             why()
             base()
             terms()
           }


      function aboutus(){
        fill(255, 249, 238)
        rect(22,87,141,152)
        textSize(13)
        let b = 'we are trying to help people eat and get fat, mainly for poor people'
        fill(0,0,0)
        text(b, 25, 90 ,70, 150)
      }
      function why(){
        fill(248, 244, 231)
        rect(176,260,111,137)
        let c = 'we want everyone to have food'
        fill(0,0,0)
        text(c, 180, 265 ,70, 150)
      }
      function base(){
        fill(196, 196, 196)
        rect(22,422,265,26)
      }
      function terms(){
        fill(250,250,250)
        rect(163,427,119,15)
        textSize(7)
        let e = 'tems and conditions'
        fill(0,0,0)
        text(e,180, 433, 70, 150)
      }


}


function loginpage(){


  this.draw = function(){
    background(255,255,255)
    log()
    email()
    password()
  }

  function log(){
    fill(250,250,250)
    rect(46,294,288,179)
    function emailtext(){
      textSize(12)
      let f = 'email'
      fill(0,0,0)
      text(f, 70,310,244,36)
    }
    function passtext(){
      textSize(12)
      let g = 'password'
      fill(0,0,0)
      text(g, 70, 375, 244, 36)
    }
    function logintext(){
      textSize(15)
      let h = 'login'
      fill(0,0,0)
      text(h, 160, 305, 244, 36)
    }
    function forgot(){
      textSize(10)
      let i = 'forgot password?'
      fill(0,0,0)
      text(i, 70, 450, 244, 36)
    }
    emailtext()
    passtext()
    logintext()
    forgot()

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

function questionpage(){
background(250,250,250)
let inp = createInput('');
inp.position(495, -162);
inp.size(278);
inp.input(myInputEvent);

function myInputEvent() {
  console.log('you are typing: ', this.value());
}



}
