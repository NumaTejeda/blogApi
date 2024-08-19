import express from 'express';
import bodyParser from 'body-parser';
// import routes from './routes/index.js'
import cookieParser from 'cookie-parser'; // Para manejar cookies
import routes  from './routes/index.js'

console.clear()
const port = 3100;

const app = express(); 

// Middleware para manejar cookies
app.use(cookieParser());

//Middleware para parsear el cuerpo de la solicitud
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => {
    console.log(`Abrime => http://localhost:${port}`);
})