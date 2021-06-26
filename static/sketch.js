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
      btn.size(57,35)
      btn.mousePressed(enter)
      col2 = color(255,255,255)
      btn2 = createButton("Forms")
      btn.style('background-colour', col2)
      btn2.position(29,427,119,15)
      btn2.size(119,15)
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
          fill(255,255,255)
          rect(10,20,300,450)
            title()
             aboutus()
             why()
             base()
             terms()
           }



      function title(){
        fill(215, 215, 215)
        rect(22,24,183,35)
        let s = 'Food For All';
        fill(0,0,0)
        text(s, 30, 40, 70, 80); // Text wraps within text box
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

this.setup = function(){
    let col = color(228,229,229)
        inp2 = createInput()
        inp2.style('background-color', col)
        inp2.position(70,325,244,36)
        inp2.size(244,36)

    let col1 = color(228,229,229)
        inp3 = createInput()
        inp3.style('background-color', col1)
        inp3.position(70,395,244,36)
        inp3.size(244,36)

    let col2 = color(249, 247, 230)
    btn3 = createButton('Login')
    btn3.position(200,450)
    btn3.style('background-color',col2)
    btn3.mousePressed(back)

    function back(){
      mgr.showScene(homescreen1)
      btn3.hide()
      inp2.hide()
      inp3.hide()
      btn2.show()
      btn.show()
    }
  }

  this.draw = function(){
    background(255,255,255)
    log()
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

}

function questionpage(){

this.setup = function(){
    let col3 = color(196, 196, 196)
    inp1 = createInput()
    inp1.style('background-color', col3)
    inp1.position(200,250,278,57)
    inp1.size(278,57)


    let col5 = color(255,255,255)
    inp4 = createInput()
    inp4.style('background-color',col5)
    inp4.position(200,380)

    inp5 = createInput()
    inp5.style('background-color',col3)
    inp5.position(200,400)
    inp5.size(278,29)

    let col6 = color(238, 238, 238)
    btn4 = createButton('next')
    btn4.position(375,460)
    btn4.style('background-color',col6)
    btn4.size(107,15)
    btn4.mousePressed(page1)


    function page1(){
     mgr.showscene(questionpage2)
     btn4.hide()
   }

this.draw = function(){
  background(250,250,250)
  fill(250,250,250)
  rect(190,10,300,450)
}

function qn1(){
    fill(255, 249, 238)
    rect(495,100,278,29)
}

  }

}

function questionpage2(){
  background(250,250,250)
}
