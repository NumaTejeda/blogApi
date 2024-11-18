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

            const uploadResult = await new Promise((resolve, reject) => {
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
            req.url = uploadResult.secure_url;

            next()
        } catch (e) {
            console.log(e)
            res.status(500).send({ message: 'Error uploading desde el back middleImage.js', e })
        }
    },


    getAllImage: async (req, res) => {
        const options = {
            type: 'upload',
            max_results: 10
        }
        try {
            const dataAllImages = await cloudinary.api.resources(options);
            console.log(dataAllImages)
            res.status(200).json({ message: 'Uploaded images successfully', dataAllImages })
        } catch (error) {
            console.log(error)
        }
        //! Falta manejo de errores y otras cuestiones
    },

    deleteImageWithId: async (req, res) => {
        try {
            const public_id = req.params.id;
            //! No distingue minusculas de mayusculas
            const deleteResponse = await cloudinary.api.delete_resources([public_id])
            const { deleted } = deleteResponse;
            console.log(deleted[public_id])
            if(deleted[public_id] === "not_found"){
                return res.status(404).json({ message: `${public_id} not found`})
            }
            
            return res.status(200).json({ message: 'Imagen eliminada', deleteResponse })
        }
        catch (error) {
            console.log(error)
            const { message, http_code } = error.error;
            return res.status(400).json({ message: message, http_code: http_code })
        }
    }
}
