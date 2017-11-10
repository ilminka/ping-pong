var pingPong = function(number) {
  var gameArray = [];
  if (number >= 0) {
    for (var index = 1; index <= number; index++) {
      gameArray.push(index);
    }
    gameArray.forEach(function(number) {
      if (number % 3 === 0) {
        gameArray[number-1] = "ping";
      } else if (number % 5 === 0) {
        gameArray[number-1] = "pong";
      } else if (number % 15 === 0) {
        gameArray[number-1] = "pingpong";
      }
    });
  }
  return gameArray;
}
