
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
var mongoose = require('mongoose');
 



mongoose.connect('mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

const port = 7000;
const app = express();

var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

var contact = mongoose.model('contact', contactSchema);

var loginSchema = new mongoose.Schema({
    name: String,
    password: String
});

var login = mongoose.model('login', loginSchema);



var signSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:String,
    username:String
});

var sign = mongoose.model('sign', signSchema);



app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, "views"));
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/home', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

app.get('/login', (req, res) => {
    const params = {};
    // res.render('login.pug');

    res.status(200).render('login.pug', params);
});

app.get('/about', (req, res) => {
    const params = {};
    res.status(200).render('about.pug', params);
});
app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save()
        .then(() => {
            res.send("This item has been saved to the database");
        })
        .catch(() => {
            res.status(400).send("Item was not saved to the database");
        });
});

app.post('/login', (req, res) => {
  var myData = new login(req.body);
    myData.save()
        .then(() => {
            res.send("Congratulation");
        })
        .catch(() => {
            res.status(600).send("Invalid Username or Password");
        });
});


app.post('/sign', (req, res) => {
    var myData = new sign(req.body);
      myData.save()
          .then(() => {
              res.send("Congratulation");
          })
          .catch(() => {
              res.status(200).send("Not registered");
          });
  });

app.get('/index', (req, res) => {
    const params = {};
    res.status(200).render('index.pug', params);
});

app.get('/class', (req, res) => {
    const params = {};
    res.status(200).render('class.pug', params);
});

app.get('/service', (req, res) => {
    const params = {};
    res.status(200).render('service.pug', params);
});
app.get('/sign', (req, res) => {
    const params = {};
    res.status(200).render('sign.pug', params);
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

