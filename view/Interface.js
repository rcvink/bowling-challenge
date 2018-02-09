$(document).ready(function() {
  var game = new Game();
  var rollCellIndex = 1;
  var frameCellIndex = 1;

  $('#b1').on('click', function() {
    updateThings(new Roll(1));
  });

  $('#b2').on('click', function() {
    updateThings(new Roll(2));
  });

  $('#b3').on('click', function() {
    updateThings(new Roll(3));
  });

  $('#b4').on('click', function() {
    updateThings(new Roll(4));
  });

  $('#b5').on('click', function() {
    updateThings(new Roll(5));
  });

  $('#b6').on('click', function() {
    updateThings(new Roll(6));
  });

  $('#b7').on('click', function() {
    updateThings(new Roll(7));
  });

  $('#b8').on('click', function() {
    updateThings(new Roll(8));
  });

  $('#b9').on('click', function() {
    updateThings(new Roll(9));
  });

  $('#b10').on('click', function() {
    updateThings(new Roll(10));
  });

  function updateThings(roll) {
    addRollToFrame(roll);
    updateRollScore(roll);
    if (game.currentFrame().isEmpty()) {
      updateFrameScore();
    }
  }

  function addRollToFrame(roll) {
    game.currentFrame().addRoll(roll);
  };

  function updateRollScore(roll) {
    $(`#r${rollCellIndex}`).text(roll.pins());
    rollCellIndex++;
  };

  function updateFrameScore() {
    $(`#f${frameCellIndex}`).text(game.score());
    frameCellIndex++;
  };

});
