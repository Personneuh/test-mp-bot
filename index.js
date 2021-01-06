const axios = require("axios");
const { exec } = require("child_process");

exec("curl -s https://cli-assets.heroku.com/heroku-linux-x64.tar.gz | tar xz", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });


setTimeout( () => { exec("heroku run heroku ps:scale worker=2", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
                  }, 1000*30)


setInterval( () => {
    axios.get("https://geniesbotslogin.glitch.me/testheroku")   
}, 1000*30);
