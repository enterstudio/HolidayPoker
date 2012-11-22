var MachinePoker = require('MachinePoker');
var narrator = MachinePoker.observers.narrator;
var fileLogger = MachinePoker.observers.fileLogger('./results.json');

var table = MachinePoker.create({
  "maxRounds" : 2,
  "chips" : 1000,
  "betting" : MachinePoker.betting.noLimit(10,20)
});

table.addPlayer("https://raw.github.com/gist/d2d69b3178379458d2b9/HardlyKnower.js", {name: "HardlyKnower - @farktronix"});
table.addPlayer("https://raw.github.com/gist/affa85924b3b9ba115dd/rpj-losing_statelessly.js", {name: "Losing Statelessly - @rpj"});
table.addPlayer("https://raw.github.com/gist/7ea74e5aca4da2265382/bot.js", {name: "Rucky Bot - @chenosaurus"});
table.addPlayer("https://raw.github.com/gist/ee24fb0ebcf00fbc9f23/jacksorbetterbot.js", {name: "Jacks Or Better - @kylar42"});

// Add some observers
table.addObserver(narrator);
table.addObserver(fileLogger);

table.on('ready', function() {
  console.log('ready');
  table.start();
});

