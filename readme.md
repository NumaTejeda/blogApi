
#### POST /api/v1/uploadImage
Descripción: Sube a cloudinary la imagen seleccionada y el public_id (title)
Parámetros:
  - Ninguno

##### Respuesta exitosa (200):
```
  {
    message: "Imagen subida",
    ulr: "https://res.cloudinary..."
  }
```
 
### //Posteo


#### POST /api/v1/posts
Descripcion: Sube el posteo y lo guarda en la base de datos sqlite
Parámetros:
  - Ninguno


##### Respuesta exitosa (200):
```
 {
    "posteo":
    {
    "id":18,
    "title":"alo"
    ,"urlImagen":"https://res.cloudinary.com/dk6dhewrv/image/upload/v1731431450/Algoloco.jpg",
    "content":"holis",
    "mg":3,
    "updatedAt":"2024-11-12T17:19:41.901Z",
    "createdAt":"2024-11-12T17:19:41.901Z"
    }    
}
```

#### GET /api/v1/posts
Descripcion: Trae todos los posteos
Parámetros:
  - Ninguno


###### Respuesta exitosa (200):
```
{
    "posteos":
    [
        {
            "id":7,
            "title":"Actualizando",
            "urlImagen":"./hola/tu/",
            "content":"Contenido nuevo papu",
            "mg":8,"createdAt":"2024-08-17T20:01:24.852Z",
            "updatedAt":"2024-08-19T17:16:07.210Z"
        },
        {
            "id":9,
            "title":"Central Factors Supervisor",
            "urlImagen":"http://placeimg.com/640/480",
            "content":"Voluptas dicta cum ea ea eum similique molestias id modi. Ratione corporis animi ut omnis quasi maiores itaque autem magni. Iusto voluptate dolores autem corporis architecto fugit. Ut nostrum sed voluptatem et repudiandae voluptas. Totam non nesciunt.",
            "mg":554,
            "createdAt":"2024-08-19T17:21:47.623Z",
            "updatedAt":"2024-08-19T17:21:47.623Z"
        },
        {...}
    ]
}
```

#### GET /api/v1/posts/:id
Descripcion: Obtiene el post por id
Parámetros:
  - id


##### Respuesta exitosa (200):
```
{
  "posteo":
  {
  "id":18,
  "title":"alo"
  ,"urlImagen":"https://res.cloudinary.com/dk6dhewrv/image/upload/v1731431450/Algoloco.jpg",
  "content":"holis",
  "mg":3,
  "updatedAt":"2024-11-12T17:19:41.901Z",
  "createdAt":"2024-11-12T17:19:41.901Z"
  }    
}
```
#### PUT /api/v1/posts/:id
Descripcion: Actualiza el post por id
Parámetros:
  - id


##### Respuesta exitosa (200):
```
{
    message: 'Post actualizado.'
}
```

#### DELETE /api/v1/posts/:id
Descripcion: Elimina el post por id
Parámetros:
  - id


##### Respuesta exitosa (200):
```
{
  message: `Posteo con id: ${id} ELIMINADO CON EXITO`
}
```
