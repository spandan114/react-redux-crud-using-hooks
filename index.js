const express = require("express");
const mongoose = require("mongoose");
const {mongoURI} = require('./keys')

const app = express();

app.use(express.json());

mongoose
  .connect(mongoURI,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
  .then(() => console.log("Mondodb Connected...."))
  .catch(err => console.error(err));

  //use model

  require('./models/contact')

// Use routes

app.use('/contact', require('./router/crud'))

app.get("/", (req, res) => {
  res.send("Server working");
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));