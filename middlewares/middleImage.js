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
            req.url = uploadResult.secure_url;
            
            next()
        } catch (e) {
            console.log(e)
            res.status(500).send({ message: 'Error uploading desde el back middleImage.js', e })
        }
    },


    //! No anda
    getAllImage: async (req, res) => {
        // try {
        //     const images = await cloudinary.api.resource({
        //         type: 'upload', // Tipo de recurso que quieres obtener
        //         prefix: '', // Puedes agregar un prefijo si necesitas filtrar por un grupo específico
        //         max_results: 30, // Número máximo de resultados a obtener
        //     })
        //     console.log(images);
        // } catch (error) {
        //     console.error(error);
        // }
        // console.log(images)
        
        //! para traer de a uno por el public_id
        // try {
            //     const image = cloudinary.url('shoes');
            
            //     res.status(200).json({ image }  )
            // } catch (error) {
                //     console.log(error);
                // }
                
                
        
        //! Tampoco anda 
        // ? Consultar en Admin API Cloudinary
        const options = { resource_type:"image", max_results: 500}
        
        try {
            const allImages = cloudinary.api.resource(options)
            
            console.log(allImages)
            res.status(200).json({allImages})
        } catch (error) {
            
        }
    }
}