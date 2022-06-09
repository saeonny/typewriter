const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (nickname) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favourites) => {
          rl.question('You are cat person or dog person , answer as cat or dog ', (person) => {
            console.log("============================");
            console.log(`${nickname}'s PROFILE has generated! \n`);
            console.log(`Hello, my name is ${nickname}. My favorite activity is doing ${activity} and i love to listen ${music} during my activity. I love to eat ${favourites} during ${meal}. And I am ${person} person!!`);
            rl.close();
          });
        });
      });
    });
  });
});


