
// const express = require("express");
// const path = require("path");
// const bodyparser = require("body-parser");
// var mongoose = require('mongoose');
 



// mongoose.connect('mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

// const port = 7000;
// const app = express();

// var contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
// });

// var contact = mongoose.model('contact', contactSchema);

// var loginSchema = new mongoose.Schema({
//     name: String,
//     password: String
// });

// var login = mongoose.model('login', loginSchema);



// var signSchema = new mongoose.Schema({
//     name: String,
//     password: String,
//     email:String,
//     username:String
// });

// var sign = mongoose.model('sign', signSchema);



// app.use('/static', express.static('static'));
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'pug');
// // app.set('view engine', 'html');
// // app.set('views', path.join(__dirname, "views"));
// app.set('views', path.join(__dirname, "views"));

// app.get('/', (req, res) => {
//     const params = {};
//     res.status(200).render('home.pug', params);
// });

// app.get('/home', (req, res) => {
//     const params = {};
//     res.status(200).render('home.pug', params);
// });

// app.get('/contact', (req, res) => {
//     const params = {};
//     res.status(200).render('contact.pug', params);
// });

// app.get('/login', (req, res) => {
//     const params = {};
//     // res.render('login.pug');

//     res.status(200).render('login.pug', params);
// });

// app.get('/about', (req, res) => {
//     const params = {};
//     res.status(200).render('about.pug', params);
// });
// app.post('/contact', (req, res) => {
//     var myData = new contact(req.body);
//     myData.save()
//         .then(() => {
//             res.send("This item has been saved to the database");
//         })
//         .catch(() => {
//             res.status(400).send("Item was not saved to the database");
//         });
// });

// app.post('/login', (req, res) => {
//   var myData = new login(req.body);
//     myData.save()
//         .then(() => {
//             res.send("Congratulation");
//         })
//         .catch(() => {
//             res.status(600).send("Invalid Username or Password");
//         });
// });


// app.post('/sign', (req, res) => {
//     var myData = new sign(req.body);
//       myData.save()
//           .then(() => {
//               res.send("Congratulation");
//           })
//           .catch(() => {
//               res.status(200).send("Not registered");
//           });
//   });


 

// app.get('/index', (req, res) => {
//     const params = {};
//     res.status(200).render('index.pug', params);
// });

// app.get('/class', (req, res) => {
//     const params = {};
//     res.status(200).render('class.pug', params);
// });

// app.get('/service', (req, res) => {
//     const params = {};
//     res.status(200).render('service.pug', params);
// });
// app.get('/sign', (req, res) => {
//     const params = {};
//     res.status(200).render('sign.pug', params);
// });

// app.listen(port, () => {
//     console.log(`The application started successfully on port ${port}`);
// });





// const express = require("express");
// const path = require("path");
// const bodyparser = require("body-parser");
// import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";



// var mongoose = require('mongoose');
 



// mongoose.connect('mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

// const port = 7000;
// const app = express();

// var contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
// });

// var contact = mongoose.model('contact', contactSchema);

// var loginSchema = new mongoose.Schema({
//     name: String,
//     email:String,
//     password: String
// });

// var login = mongoose.model('login', loginSchema);



// var signSchema = new mongoose.Schema({
//     name: String,
//     password: String,
//     email:String,
//     username:String
// });

// var sign = mongoose.model('sign', signSchema);


// // Use cookie parser middleware
// app.use(cookieParser());

// app.use('/static', express.static('static'));
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'pug');
// // app.set('view engine', 'html');
// // app.set('views', path.join(__dirname, "views"));
// app.set('views', path.join(__dirname, "views"));

// // Middleware to check authentication
// const isAuthenticated = async (req, res, next) => {
//     const { token } = req.cookies;
//     if (token) {
  
//       const decoded = jwt.verify(token, "sdjasdbajsdbjasd")
//       // console.log(decoded);
  
//       req.user = await User.findById(decoded._id);
  
//       next();
//     } else {
//       res.redirect("/login");
//     }
//   };
  


//   app.get("/", isAuthenticated, (req, res) => {
//     console.log(req.user);
//     res.render("logout", { name: req.user.name });
//   });
  
  
//   app.get("/login", (req, res) => {
//     res.render("login");
//   })
  
  
//   app.get("/register", (req, res) => {
//     res.render("register");
//   });
  
  
  
//   app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     let user = await User.findOne({ email });
//     if (!user) return res.redirect("/register");
  
//     const isMatch =  await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.render("login", { email, message: "Incorrect Password" });
  
//     const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");
//     // console.log(token);
  
//     res.cookie("token", token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + 60 * 1000), // Set token expiration time
//     });
//     res.redirect("/");
//   });
  
  
//   // Handle login request
//   app.post("/register", async (req, res) => {
  
//     // we are using req.body for  the access the data from login page 
//     // console.log(req.body);
//     console.log(req.body);
//     const { name, email, password } = req.body;
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.redirect("/login");
//     }
  
//   const hashedPassword= await bcrypt.hash(password,10);
  
//     user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });
  
//     const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");
//     // console.log(token);
  
//     res.cookie("token", token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + 60 * 1000), // Set token expiration time
//     });
//     res.redirect("/");
//   });
  
//   // Handle logout request
//   app.get("/logout", (req, res) => {
//     res.clearCookie("token");
//     res.redirect("/");
//   });




// app.get('/', (req, res) => {
//     const params = {};
//     res.status(200).render('home.pug', params);
// });

// app.get('/home', (req, res) => {
//     const params = {};
//     res.status(200).render('home.pug', params);
// });

// app.get('/contact', (req, res) => {
//     const params = {};
//     res.status(200).render('contact.pug', params);
// });

// app.get('/login', (req, res) => {
//     const params = {};
//     // res.render('login.pug');

//     res.status(200).render('login.pug', params);
// });

// app.get('/about', (req, res) => {
//     const params = {};
//     res.status(200).render('about.pug', params);
// });
// app.post('/contact', (req, res) => {
//     var myData = new contact(req.body);
//     myData.save()
//         .then(() => {
//             res.send("This item has been saved to the database");
//         })
//         .catch(() => {
//             res.status(400).send("Item was not saved to the database");
//         });
// });

// app.post('/login', (req, res) => {
//   var myData = new login(req.body);
//     myData.save()
//         .then(() => {
//             res.send("Congratulation");
//         })
//         .catch(() => {
//             res.status(600).send("Invalid Username or Password");
//         });
// });


// app.post('/sign', (req, res) => {
//     var myData = new sign(req.body);
//       myData.save()
//           .then(() => {
//               res.send("Congratulation");
//           })
//           .catch(() => {
//               res.status(200).send("Not registered");
//           });
//   });


 

// app.get('/index', (req, res) => {
//     const params = {};
//     res.status(200).render('index.pug', params);
// });

// app.get('/class', (req, res) => {
//     const params = {};
//     res.status(200).render('class.pug', params);
// });

// app.get('/service', (req, res) => {
//     const params = {};
//     res.status(200).render('service.pug', params);
// });
// app.get('/sign', (req, res) => {
//     const params = {};
//     res.status(200).render('sign.pug', params);
// });

// app.listen(port, () => {
//     console.log(`The application started successfully on port ${port}`);
// });

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/myDatabase', { useNewUrlParser: true });

const port = 7000;
const app = express();

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const Contact = mongoose.model('Contact', contactSchema);

const loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Login = mongoose.model('Login', loginSchema);

const signSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    username: String
});

const Sign = mongoose.model('Sign', signSchema);

app.use(cookieParser());
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    try {
        const decoded = jwt.verify(token, "sdjasdbajsdbjasd");
        req.user = await Sign.findById(decoded._id);
        next();
    } catch (err) {
        console.error(err);
        res.redirect("/login");
    }
};

app.get("/", isAuthenticated, (req, res) => {
    res.render("logout", { name: req.user.name });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Login.findOne({ email });
    if (!user) return res.render("login", { email, message: "Incorrect Email or Password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.render("login", { email, message: "Incorrect Email or Password" });

    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect("/");
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    let user = await Login.findOne({ email });
    if (user) return res.redirect("/login");

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await Login.create({
        name,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect("/");
});

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
});

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/home', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});

app.post('/contact', (req, res) => {
    const myData = new Contact(req.body);
    myData.save()
        .then(() => {
            res.send("This item has been saved to the database");
        })
        .catch(() => {
            res.status(400).send("Item was not saved to the database");
        });
});

app.post('/sign', (req, res) => {
    const myData = new Sign(req.body);
    myData.save()
        .then(() => {
            res.send("Congratulation");
        })
        .catch(() => {
            res.status(400).send("Not registered");
        });
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
