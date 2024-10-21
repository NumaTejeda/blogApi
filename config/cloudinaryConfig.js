import { v2 as cloudinary } from 'cloudinary';



//Configuracion de cloudinary
cloudinary.config({ 
    cloud_name: 'dk6dhewrv', 
    api_key: '763273593289275', 
    api_secret: 'N7hn0EaG12Apgz6bGIDPrOu7P-4' // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;