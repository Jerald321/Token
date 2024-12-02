const express =require("express")
const app = express()
const mongoose =require("mongoose")
const  userRoutes =require("./routes/userroutes")
const cors =require("cors")
const bodyParser = require('body-parser');

const cookieparser = require("cookie-parser")


app.use(express.json());

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:5173, https://fanciful-twilight-9f0aa0.netlify.app']


app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true, // Ensure cookies are sent
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    })
  );
  

   
app.use(cookieparser());

app.use("/api/v1", userRoutes)

module.exports = app;