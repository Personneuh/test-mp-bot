const Twit = require("twit")

var T = new Twit({
    consumer_key:'luqGYIRymWMTtzpEKzd6Nsa1i',
    consumer_secret:'SNV0DZvr73FjNS04ue9dywOtGkgZEDUCWvH6rnkum0SjhxcN7d',
    access_token:'825259071393656832-gyfArkPXTBsvyt4cY8O6hZIRCsiMzaH',
    access_token_secret:'l4eaVxXNerZROqNqzV37C0jt6mdkpzYSiovEsZZ69H260'
});

console.log("The bot is running...");

/*const messageContent = "Salut ! tu veux manger du poulet toi aussi ?"
const researchedWord = "poulet"
 var stream = T.stream('statuses/filter', { track: researchedWord })
 
 stream.on('tweet', function (tweet) {
    const message = {"event": {"type": "message_create", "message_create":
    {"target": {"recipient_id": String(tweet.user.id)}, "message_data": {"text": messageContent}}}}
    T.post('direct_messages/events/new', message, function (err, data, response) {
        if (!err) {
            console.log("Message sent to "+tweet.user.name)
        } else {
            console.log(err)
            console.log(tweet.user.id)
        }
      })
 })*/


nbMess = 0

setInterval(poster,1000*60)

function poster() {
    T.post("statuses/update",
    {status:"Combien de temps ce programme va-t-il tenir ? C'est le message"+nbMess+" qu'il poste !! "+Date()}, 
    (err,data,rep) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Un de plus ! "+nbMess)
            nbMess++;
        }
    })
}


