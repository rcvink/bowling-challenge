$(document).ready(function() {
  var game = new Game();

  $('#1').on('click', function() {
    addRollToFrame(new Roll(1));
  });

  $('#2').on('click', function() {
    addRollToFrame(new Roll(2));
  });

  $('#3').on('click', function() {
    addRollToFrame(new Roll(3));
  });

  $('#4').on('click', function() {
    addRollToFrame(new Roll(4));
  });

  $('#5').on('click', function() {
    addRollToFrame(new Roll(5));
  });

  $('#6').on('c2lick', function() {
    addRollToFrame(new Roll(6));
  });

  $('#7').on('click', function() {
    addRollToFrame(new Roll(7));
  });

  $('#8').on('click', function() {
    addRollToFrame(new Roll(8));
  });

  $('#9').on('click', function() {
    addRollToFrame(new Roll(9));
  });

  $('#10').on('click', function() {
    addRollToFrame(new Roll(10));
  });

  function addRollToFrame(roll) {
    game.currentFrame().addRoll(roll);
    console.log(game);
  };

});
