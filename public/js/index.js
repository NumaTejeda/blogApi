

const inputFile = document.querySelector('#image');


//Animacion de archivo subido 
inputFile.addEventListener('change', () =>{
    const labelFile = document.querySelector('.custom-file-upload');
    const fileName = inputFile.files[0].name.slice(0, 20) + "..";
    if(inputFile.files[0]){
        labelFile.textContent = fileName;
        labelFile.style.backgroundColor = "green"
    }
})



//Envia los datos del formulario al back donde es manejado para su subida a cloudinary
const formUploadImage = document.querySelector('#form');

formUploadImage.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(formUploadImage);

    try {
        const respuesta = await fetch('api/v1/uploadImage', {
            method: "POST",
            // headers: multipartFormData lo pone solito 
            body: formData
        })
        try {
            const result = await respuesta.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    } catch (error) {
        console.log(error);
    }
})



