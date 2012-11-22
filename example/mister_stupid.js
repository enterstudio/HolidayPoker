exports.name = "Mister Stupid";

exports.play = function(game) {
  if (game.state !== "complete") {
    console.log("I'm betting");
    return game.betting.call
  }
};
