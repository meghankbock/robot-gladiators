// Game States
// "WIN" - Player robot has defated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy robots
// "LOSE" - Player robot's health is zero or less

//var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyNames);
//var enemyHealth = 50;
//var enemyAttack = 12;

var fight = function (enemy) {
  // repeat and execute as long as the enemy-robot is alive
  while (enemy.health > 0 && playerInfo.health > 0) {
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
        window.alert(playerInfo.name + " has chosen to skip the flight!");
        // subtrack money from playerInfo.money for skipping
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money " + playerInfo.money);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // subtrack the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
    enemy.health = Math.max(0, enemy.health - damage);

    // log a resulting message to the console so we know that it worked.
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    //check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    // subtrack the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // log a resulting message to the console so we know that it worked.
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
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

/*if (playerInfo.health === 0) {
    console.log("this will not run");
}

else {
    console.log("this will run instead");
}

if (playerInfo.health > 0) {
    console.log("Your player is still alive");
}

function fight () {
    window.alert("The fight has begun!");
}*/

var startGame = function () {
  //debugger;

  // reset player stats
  playerInfo.reset();

  //playerInfo.health = 100;
  //playerInfo.attack = 10;
  //playerInfo.money = 10;

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let player know what round they are in
      window.alert("Welcome to Robot Gladiators" + (i + 1));
      // debugger;

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // user debuger to pause script from running and check what's going on at that moment in the code
      //debugger;

      // call fight function with enemy robot
      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before the next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // play again
  endGame();
};

var endGame = function () {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("You've lost yoru robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  console.log("entered the shop");

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE yoru attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;

    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// function to set name
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

//console.log("Robot Name: " + playerInfo.name + "; Player Attack: " + playerInfo.attack + " Player Health: " + playerInfo.health);

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

// start the game when the page loads
startGame();
