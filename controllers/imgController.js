// import multer from 'multer';

// const upload = multer({dest: './uploads'})
import cloudinary  from '../config/cloudinaryConfig.js'

// Upload an image

export const managerImage = {
    uploadImage: async (req, res)=>{
        try{
            const { public_id ,urlImage } = req.body;
    
            const uploadResult = await cloudinary.uploader
            .upload(
                `${urlImage}`, {
                    public_id: public_id,
                }
            )
            console.log(uploadResult)
            res.status(200).send({message: 'Imagen subida'});
        }catch(e){console.log(e)}
    }
}