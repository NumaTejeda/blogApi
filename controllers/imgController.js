

// Conecta la url creada por cloudinary con el post


//! Hay que dividir tareas. Las imagenes se suben a clodinary, luego puede hacer un get para traerlas y mostrarlas en el front
//! donde se elige una y a travez de un put conectarla a algun post.


export const controllerImage = {
    printUrl: async (req, res)=>{
        try{
            // console.log(req.urlImage)
            // console.log(req.publicId)
            // console.log(req.postId)

            res.status(200).send({message: 'Imagen subida'});
        }catch(e){
            console.log(e)
        }
    }
}