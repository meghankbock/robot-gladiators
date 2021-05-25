// Game States
// "WIN" - Player robot has defated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy robots
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//console.log("Robot Name: " + playerName + "; Player Attack: " + playerAttack + " Player Health: " + playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while (enemyHealth > 0 && playerHealth > 0) {
    // if the enemy-robot has health points, continue to fight
    // place fight function code block here...
    // alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators");

    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this batter? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player chooses to "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes, skip
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the flight!");
        // subtrack money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney " + playerMoney);
        break;
      }
    }
    // subtrack the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to the console so we know that it worked.
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtrack the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the console so we know that it worked.
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }

  /* if no
      else {
        fight();
      }
    } else {
      window.alert("You need to choose a valid option. Please try again!");
    }*/
};

/*if (playerHealth === 0) {
    console.log("this will not run");
}

else {
    console.log("this will run instead");
}

if (playerHealth > 0) {
    console.log("Your player is still alive");
}

function fight () {
    window.alert("The fight has begun!");
}*/

var startGame = function () {
  debugger;

  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in
      window.alert("Welcome to Robot Gladiators" + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // user debuger to pause script from running and check what's going on at that moment in the code
      //debugger;

      // call fight function with enemy robot
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // play again
  endGame();
};

var endGame = function() {
    // if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost yoru robot in battle.");
    }

    var playerAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// start the game when the page loads
startGame();
