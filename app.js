var skype = require('botbuilder');
var express = require('express');

var app =  express();

var botService = new skype.ChatConnector({
    appId:'',
    appPassword:''
});

var bot = new skype.UniversalBot(botService);

app.post('/api/messages', botService.listen());

bot.dialog('/',function (session) {
    if(session.message.text.toLowerCase().indexOf('hi')>=0){
        session.send('Hi ' + session.message.user.name +
            ' thank you for your message: ' + session.message.text);
    }else{
        session.send('Sorry I dont understand you...');
    }
});

app.get('/', function (req, res) {
    res.send('SkypeBot listening...');
});

app.listen(process.env.port, function () {
    console.log('SkypeBot listening...');
});