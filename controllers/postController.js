import { Post } from '../models/Post.js';

export const managerPost = {
    addPost: async (req, res)=>{
        try {
            const { title, urlImagen, content, mg } = req.body;
            const posteo = await Post.create({title, urlImagen, content, mg});
            return res.status(200).send({posteo: posteo});
        } catch (error) {
            console.log(error);
        }
    },
    //Hay que controlar la cantidad de los que trae
    getAllPosts: async (req, res) => {
        try {
            const posteos = await Post.findAll();
            return res.status(200).send({posteos: posteos});
        } catch (error) {
            console.log(error);
        }
    },
    updatePost: async (req, res) =>{
        try {
            const id = req.params.id;
            const { title, content, urlImagen, mg} = req.body;
            const post = await Post.findByPk(id);

            if(!post){
                return res.status(404).send({message: 'Post not found'});
            }
            
            await post.update({
                title: title || post.title,
                content: content || post.content,
                urlImagen: urlImagen || post.urlImage,
                mg: mg || post.mg
            })
            return res.status(200).send({message: 'Post actualizado.' })
        } catch (error) {
            console.log(error);
        }
    },
    deletePost: async (res, req) =>{
        try {
            const id = await res.params.id;
            const result = await Post.destroy({
                where: {id}
            })
            return req.status(200).send({message: `Posteo con id: ${id} ELIMINADO CON EXITO`}); // True si elimino registro
        } catch (error) {
            console.log(error);
        }
    }
}

