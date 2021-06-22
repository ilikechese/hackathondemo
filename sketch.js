function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background(255, 255, 255)
}



function draw() {
  // put drawing code here
  function homescreen(){
      rect(22,24,183,35)
      fill(249, 247, 230)
      function loginbutton(){
        rect(230,24,57,35)
        fill(255,249,238)
      }
      function aboutus(){
        rect(22,87,141,152)
        fill(248, 244, 231)
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

homescreen()

}

draw()
