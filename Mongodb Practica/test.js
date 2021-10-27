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

//Agregamos multiples lineas, debajo tenemos el formato correcto
db.chofer.insert([
    {nombre: 'Diego', Apellido: 'Vilmes', dni: '11111111'},
    {nombre: 'Leandro', Apellido: 'Arevalo', dni: '11111111'},
    {nombre: 'Fernando', Apellido: 'Prado', dni: '11111111'},
    {nombre: 'Javier', Apellido: 'Perlo', dni: '11111111'}
])

//Buscamos un elemento, si no le pasamos argumento, muestra toda la lista
db.chofer.find()

//Buscamos un elemento con su respectiva clave
db.chofer.find({nombre: 'Victor'})

//Para actualizar un dato, necesario reescribir todo!
db.chofer.update(
    {Apellido: 'Vilmes'},
    {
        nombre: 'Diego',
        Apellido: 'Vilmes',
        dni: '22222222'
    }
)

/* MongoDb tiene la particularidad que al no ser estructurado, podemos modificar un dato agregando algun elemento sin tener que modificar la estructura de la tabla */

// Para mejoramos la apariencia de la busqueda, agregamos pretty al final()
db.chofer.find().pretty()


//Si buscamos por id y agregamos usamos
$set

// si buscamos por id y queremos modificar algun campo usamos incremento, siempre hablando por si es numero
$inc

// Si buscamos por id, queremos quitar un valor
$unset

// upsert:true si no existe lo crea
{upsert: true}

//  rename: renombrar
{$rename: { nombre: 'Nombre'} }

// remover : Remove
remove({nombre: 'Diego'})

// Pero puede suceder que remueva todas las coincidencias, para lo cual es necesario determinar solo uno
db.chofer.remove(
    {nombre: 'Diego'},
    {justOne: true}
)

// Si queremos buscar un dato podemos aplicar operadores logicos
db.chofer.find(
    {$or: [{}, {}]}
)

// Podemos buscar mayor que $gt o menor que $lt
// db.chofer.find(age:[ ])

//Consulta con expresion regular
// usamos $regex

// Para ordenar utilizamos sort y entre parentesis, seleccionamos si es ascendente 1 o descendente -1
// Para contar usamos count()
// Para limitar la cantidad de busqueda usamos limit()

//para usar un for usamos foreach(function(doc){print(doc.name)}