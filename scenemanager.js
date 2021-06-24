this.handleEvent = function(sEvent){
  if(this.scene= null || this.scene.oScene == null )
  return

  var fnSceneEvent = this.scnee.oScene[sEvent]
  if(fnSceneEvent)
     fnSceneEvent.call(this.scene.oScene)
}

this.mousePressed = function(){
  this.handleEvent("mousePressed")
}

this.keyPressed = function(){
  this.handleEvent("keyPressed")
}
]
