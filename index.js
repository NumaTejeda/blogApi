import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes  from './routes/index.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

console.clear()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3100;

const app = express(); 

// Middleware para manejar cookies
app.use(cookieParser());

// Middleware para servir archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//Middleware para parsear el cuerpo de la solicitud
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

// Configurar el directorio donde están las vistas
app.set('views', path.join(__dirname, 'views'));
    
// Ruta para renderizar la vista dasboards.ejs
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { nombre: 'Mundo' });
});

app.use('/', routes)

app.listen(port, () => {
    console.log(`Abrime => http://localhost:${port}/dashboard`);
})