require("dotenv").config();

// setto il server
const http = require("http");
const port = process.env.PORT || 8080;
//port è uguale al valore contenuto in env.PORT oppure 8080
const host = process.env.HOST || 'localhost';
//host è uguale al valore contenuto in env.HOST oppure localhost

// Creo effettivamente il server 
const server = http.createServer((req, res) => {

    console.log(`${req.method} | ${req.url} effettuata`);

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }

    const sentences = [
        "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.",
        "Non aspettare il momento giusto per fare le cose, l'unico momento giusto è adesso.",
        "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.",
        "Non è mai troppo tardi per essere ciò che avresti potuto essere.",
        "La strada verso il successo è sempre in costruzione.",
        "Le sfide sono ciò che rende la vita interessante e superarle è ciò che la rende significativa.",
        "La motivazione ti fa iniziare. L'abitudine ti fa continuare.",
        "Credi di poterlo fare e sarai già a metà strada.",
        "Non importa quanto lentamente vai, finché non ti fermi.",
        "Il modo migliore per predire il futuro è crearlo.",
        "Il segreto per andare avanti è iniziare.",
        "Non sognare la tua vita, vivi il tuo sogno.",
        "La perseveranza è il duro lavoro che fai dopo che ti sei stancato del duro lavoro che hai fatto.",
        "Ogni giorno è una nuova opportunità per cambiare la tua vita.",
        "Sii il cambiamento che vuoi vedere nel mondo."
    ];

    function getRandomIndex() {
        return randomIndex = Math.floor(Math.random() * sentences.length);
    }

    let html;
    let sentence = sentences[getRandomIndex()];

    html = `
        <head>
            <meta charset="utf-8">
        </head>

        <h1> ${process.env.GREETING} </h1>
        <div><strong>${sentence}</strong></div>        
    `;


    res.end(html);
})

// restituisco un feedback all'avvio del server
server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
})