function restart1() {
    caveMan1.visible = true
    //cave.visible = false
    gameState = PLAY
    mode = "LEVEL1"
  
    caveMan1.changeAnimation("run", caveMan1Img)
    background1.velocityX = -3
    level1Death = 0
    level1Score = 0
  
  }