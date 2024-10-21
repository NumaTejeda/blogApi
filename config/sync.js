
import { sequelize_db } from'./sqlite_db.js'

//Sincronizar modelo con base de datos
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