var MachinePoker = require('machine-poker');
var narrator = MachinePoker.observers.narrator;
var now = new Date();
var dateStr = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
var fileLogger = MachinePoker.observers.fileLogger('./results/results-'+ dateStr +'.json');
var argv = require('optimist')
    .default({
        maxRounds : 10,
        chips : 1000,
        blind : 10,
        raise : 20
    })
    .argv
;

var table = MachinePoker.create({
  "maxRounds" : argv.maxRounds,
  "chips" : argv.chips,
  "betting" : MachinePoker.betting.noLimit(argv.blind,argv.raise)
});

table.addPlayer(
  "https://raw.github.com/gist/d2d69b3178379458d2b9/HardlyKnower.js",
  {name: "HardlyKnower - @farktronix"}
);
table.addPlayer(
  "https://raw.github.com/gist/affa85924b3b9ba115dd/rpj-losing_statelessly.js",
  {name: "Losing Statelessly - @rpj"}
);
table.addPlayer(
  "https://raw.github.com/gist/7ea74e5aca4da2265382/bot.js",
  {name: "Rucky Bot - @chenosaurus"}
);
table.addPlayer(
  "https://raw.github.com/gist/ee24fb0ebcf00fbc9f23/jacksorbetterbot.js",
  {name: "Jacks Or Better - @kylar42"}
);

// Add some observers
table.addObserver(narrator);
table.addObserver(fileLogger);

table.on('ready', function() {
  console.log('ready');
  table.start();
});

