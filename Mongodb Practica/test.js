/*
    Primero mongod
    Segundo mongo
    Tercero show dbs - muestra las bases creadas
        comandos:
            use = para crear una base
            db = para mostrar donde estamos posicionados
            show = muestra o lista las bases de datos
*/
// Para crear un usr dentro de la db
db.createUser({user: 'Xmeca', pwd: 'Euge.2780', roles: ['readWrite', 'dbAdmin']})

//Creamos una tabla dentro de la db
db.chofer.insert({nombre: 'Victor', Apellido: 'Alonso', dni: '11111111'})

//Vemos los datos de la db