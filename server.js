require("dotenv").config();

// setto il server
const http = require("http");
const port = process.env.PORT || 8080;
//port è uguale al valore contenuto in env.PORT oppure 8080
const host = process.env.HOST || 'localhost';
//host è uguale al valore contenuto in env.HOST oppure localhost

// Creo effettivamente il server 
const server = http.createServer(() => {

})
