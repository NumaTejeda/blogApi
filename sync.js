//Sincronizar modelo con base de datos

import { sequelize_db } from'./config/sqlite_db.js'
import { Post } from'./models/Post.js';   

(async ()=> {
    try{
        await sequelize_db.authenticate();
        console.log('Conexion db exitosa');

        //Sicnronizar modelos con la base de datos
        await sequelize_db.sync();
        console.log('Todos los modelos fueron sincronizados')
    }catch(e){  
        console.log(e)
    }
    finally{
        await sequelize_db.close();
    }
})();