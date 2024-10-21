import cloudinary from '../config/cloudinaryConfig.js'



//Sube la imagen a cloudinary (podria mostrar un preview, aca, o en el middleware.)



export const managerImage = {
    uploadImage: async (req, res, next) => {
        try {
            const { title } = req.body;
            const file = req.file;

            if (!file) {
                return res.status(400).send({ message: 'No se ha recibido ningún archivo.' });
            }

            const uploadResult = await new Promise((resolve, reject)=>{
                const stream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: 'image',
                        public_id: title,  // El nombre con el que se guardará la imagen
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);  // Si hay error, se rechaza la promesa
                        } else {
                            resolve(result);  // Si es exitoso, se resuelve con el resultado
                        }
                    }
                );
                
                stream.end(file.buffer);
            })
            console.log(uploadResult)

            next()
        } catch (e) {
            console.log(e)
            res.status(500).send({ message: 'Error uploading desde el back middleImage.js', e })
        }
    }
}