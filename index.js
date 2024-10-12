const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");

connectDb();

const contact = require("./routes/contactRoutes");
const user = require("./routes/userRoutes");

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use('/api/contacts', contact);
app.use('/api/user', user);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);    
});