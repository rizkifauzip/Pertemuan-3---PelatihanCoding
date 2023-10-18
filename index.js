const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});   

rl.question('what is your name?',(nama)=> {
    rl.question('what is your number phone?',(phone)=> {
        rl.question('what is your gmail?',(gmail)=> {
    console.log(`your name is ${nama} ,`, `your number is ${phone} ,`, `your gmail is ${gmail}`);

    rl.close();
        });
    });
});
rl.on('close', () => {
    process.exit(0);
  });
  