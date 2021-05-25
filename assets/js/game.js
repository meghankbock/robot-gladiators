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
  while (enemyHealth > 0) {
    // if the enemy-robot has health points, continue to fight
    // place fight function code block here...
    // alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this batter? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
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
      if (playerHealth < 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes, skip
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the flight!");
        // subtrack money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }

      // if no
      else {
        fight();
      }
    } else {
      window.alert("You need to choose a valid option. Please try again!");
    }
  }
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

for (var i = 0; i < enemyNames.length; i++) {
    //debugger;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy robot
    fight(pickedEnemyName);
}
