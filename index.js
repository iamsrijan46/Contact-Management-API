const express = require("express");
const dotenv = require("dotenv").config();

const contact = require("./routes/contactRoutes");

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use('/api/contacts', contact);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);    
});