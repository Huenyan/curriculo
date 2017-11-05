const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
var nodemailer = require("nodemailer");

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//Body Parser Muddleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('curriculo');
});

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "curriculoronyan@gmail.com",
        pass: "123senha"
    }
});

app.get('/',function(req,res){
    res.sendfile('index.html');
});

app.get('/send',function(req,res){
    
    var mailOptions={
        to : 'ronyanlu@gmail.com',
        from : req.query.from,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
    });
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port '+ app.get('port'));
});