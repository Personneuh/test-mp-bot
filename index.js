const Twit = require("twit")

var T = new Twit({
    consumer_key:'luqGYIRymWMTtzpEKzd6Nsa1i',
    consumer_secret:'SNV0DZvr73FjNS04ue9dywOtGkgZEDUCWvH6rnkum0SjhxcN7d',
    access_token:'825259071393656832-gyfArkPXTBsvyt4cY8O6hZIRCsiMzaH',
    access_token_secret:'l4eaVxXNerZROqNqzV37C0jt6mdkpzYSiovEsZZ69H260'
});

const messageContent = "Salut ! tu veux manger du poulet toi aussi ?"
const researchedWord = "assigment help"
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
 })
