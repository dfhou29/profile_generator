const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable \n", (name) => {
  console.log(`Your name: ${name}.`);

  rl.question("What's an activity you like doing? \n", (activity) => {
    console.log(`Your favorite activity: ${activity}`);

    rl.question("What do you listen to while doing that? \n", (listen) => {
      console.log(`Your favorite artist/song: ${listen}`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) \n", (favMeal) => {
        console.log(`Your favorite meal: ${favMeal}`);

        rl.question("What's your favourite thing to eat for that meal?? \n", (favFood) => {
          console.log(`Your favorite food: ${favFood}`);

          rl.question("Which sport is your absolute favourite? \n", (favSport) => {
            console.log(`Your favorite sport: ${favSport}`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! \n", (superPower) => {
              console.log(`Your super power: ${superPower}`);
              console.log("Here's your profile based on your answer:");
              console.log(`${name} loves listening to ${listen} while ${activity}, eating ${favFood} for ${favMeal}, prefer ${favSport} over any other sports, and is good at ${superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});







