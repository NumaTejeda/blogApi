import express from 'express';
import bodyParser from 'body-parser';
// import routes from './routes/index.js'
import cookieParser from 'cookie-parser'; // Para manejar cookies
import { Post } from './models/Post.js';


const port = 3100;


const app = express();

// Middleware para manejar cookies
app.use(cookieParser());

//Middleware para parsear el cuerpo de la solicitud
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', routes)
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para crear un nuevo post
app.post('/posts', async (req, res) => {
    try {
        const { title, content, mg} = req.body;
        const post = await Post.create({ title, content, mg});
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Abrime => http://localhost:${port}`);
})