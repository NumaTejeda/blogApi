const reloadButton = document.getElementById('reload-button')
const fetchPictures = async ()=>{
    const containerImage = document.getElementById('view-pictures');


    if(containerImage.hasChildNodes()){
       while(containerImage.firstChild){
        containerImage.removeChild(containerImage.firstChild);
       }
    } 


    const respuesta =  await fetch('api/v1/allImages')
    const { message, dataAllImages} = await respuesta.json();
    const images = dataAllImages.resources;
    images.forEach(item => {
        let img = document.createElement('img');
        img.src = item.secure_url;
        img.alt = item.public_id || 'Image';
        img.style.maargin = '5px';
        img.id = item.asset_id;

        containerImage.appendChild(img)
    });
    
}

fetchPictures()
reloadButton.addEventListener('click', (event)=>{
    event.preventDefault();
    fetchPictures();
})

const deleteButton = document.getElementById('deleteImage')

deleteButton.addEventListener('click', async (event)=>{
    event.preventDefault();
    const response = await fetch('api/v1/deleteImageWithId:id');
    const { message } = await response.json();
    console.log(message);

})