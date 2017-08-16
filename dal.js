const robots = require('./data') //kitties require(./cats)

function getRobot () { //getKitties
  return robots //return kitties
}

function getRobo (robotId) { //getKitty (kittyId)
  let chosenRobot = {} //chosenKitty
  for (let i = 0; i < robots.length; i++) {
    if (robots[i].id === robotId) {
      chosenRobot = robots[i] //chosenkitty = kitties[i]
    }
  }
  return chosenRobot
}

module.exports = {
  getRobot: getRobot,
  getRobo: getRobo,
}
