# Creacion del proyecto

# inicializar el proyecto
npm init -y

# inicializar el repositorio
git init 

# creacion del archivo gitgnore
tomamos de referencia la pagina: https://www.toptal.com/developers/gitignore/

touch .gitignore

# configuracion del editor
instalar el plugin EditorConfig for VS Code

touch .editorconfig

# configuracion de reglas de buenas practicas
touch .eslintrc.jsonnpm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

# creamos el archivo de entrada
touch index.js

# Configuraciones

- Añadimos en la seccion script en package.json

 "dev": "nodemon index.js",
 "start": "node index.js",
 "lint": "eslint"

- Instalamos algunas dependencias de desarrollo
  el menos -D significa que son dependencias de desarrollo

npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

- Para ejecutarlo en modo desarrollo

npm run dev 

- Para ejecutarlo en modo produccion

npm run start

# Crear un servidor con express

npm i express 

# Rutas con express 

# Parametros path

# Parametros query 

# Usando faker
npm i faker@5.5.3

npm i @faker-js/faker


http://localhost:3000/products

http://localhost:3000/products?size=3

los endpoints especificos
deben ser declarados primero
que los endpoints dinamicos 


app.get('/products/filter',(req,res) => {

app.get('/products/:id',(req,res) => { 

# Middleware para errores 

# Manejo de errores con Boom

npm i @hapi/boom 

# Validacion de datos con Joi

npm i joi

# Cors 

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

npm i cors 

# Despliegue de la solucion 

-vercel 
-render

# Usando docker

--Levantar el contenedor docker
docker-compose up -d postgres 

--Ver contenedores corriendo
docker-compose ps

--Dejar de correr el contenedor docker
docker-compose down 


-- Inspeccionar un contenedor 
docker compose inspect <nombre_contenedor>

-- Conectar al contenedor por terminal 
docker-compose exec postgres bash
root@342498c:/#psql -h localhost -d my_store -U test

-- Visualizar las estructura de las tablas de la bd 
my_store=# \d+

-- Salir del psql 
my_store=# \q

-- Visualizar los volumenes creados 

docker volume ls 

docker volume inspect <nombre_volumen>

docker volume rm <nombre_volumen>

-- Elimina volúmenes de contenedores que ya no existen
docker volume prune

-- Iniciar el servicio pgadmin 

docker-compose up -d pgadmin


# Conectando a Postgres desde Node 

npm install pg


# Instalando paquete dotenv

npm i dotenv 

# Usando ORM - Sequelize

npm i --save sequelize 
npm i --save pg-hstore
  
# Cambiando de base de datos 

-- La gran ventaja de trabajar con 
-- framework orm , ya que es independiente de 
-- la base de datos 

- Iniciar el servicio mysql 

docker-compose up -d mysql 

- Iniciar el servicio phpmyadmin 

docker-compose up -d phpmyadmin 

- Ver los logs 
docker-compose logs -f mysql


- Instalar el driver para Mysql 

npm i --save mysql2


# Migraciones en base de datos (Sequelize ORM)

- Control de versiones en base de datos (migraciones)

ejecutar los siguiente comandos para instalar "npm i sequelize-cli -D"  o "npm i sequelize-cli --save-dev"

las migraciones se corren en modo terminal por ello es necesario
que se espefique su propia configuracion de conexion 
la cual lo realizamos en el archivo .sequelizerc

Desde la consola 

npm run migrations:generate --name "create-user"

sequelize a diferencia de otros frameworks , como laravel , django o typeorm
no realiza migraciones por ti , si no que te genera un boilerplate(pieza de codigo) 
para poder ingresar el codigo para hacer las migraciones 


hay un comando que debe ser utilizado con cautela , ya que elimina 
todas las migraciones que se hayan hecho 

"migrations:delete": "sequelize-cli db:migrate:undo:all"

eliminamos las tablas que se hayan creado previamente y luego 
ejecutamos la migracion de creacion 

npm run migrations:run

# Migraciones de alteracion (modificando una entidad)

sync , no te permite hacer cambios en base de datos como en el caso 
alter tables para añadir campos , esto si es posible 
con las migraciones

ejecutamos el siguiente comando para generar 
el boilerplate para add-role

npm run migrations:generate --name add-role

ejecutamos el siguiente comando para ejecutar
las migraciones desde el punto donde se quedo

npm run migrations:run

# Regresar a la bd Postgresql

Eliminamos las tablas en postgres 
Configuramos las conexion para apuntar nuevamente a postgres
y finalmente ejecutamos los comandos de  migraciones

npm run migrations:run

# Relaciones 1-1

Sequelize tiene 2 metodos para expresar este tipo 
de relaciones 

A  ->  B
HasOne -> B (B carga con la relacion)
ej. Customer -> User

BelongsTo -> A (A carga con la relacion)
ej. Customer tenga un Usuario


npm run migrations:generate --name create-customers

npm run migrations:run

# Resolviendo relaciones 1-1

Generamos el boilerplate para el cambio unique (user_id)
que hemos realizado en el modelo customer 

npm run migrations:generate change-user-id

si tienes datos ya generados no podras correr la migracion
ya que rompen la regla 
debes hacer un borrado manual de los registros que no cumplen 
antes de correr la migracion

npm run migrations:run

resolvemos de forma anidada la otra entidad
en este caso user , cuando consultamos por customer
incluyendo el la consulta a nivel de service include:['user']

ahora si queremos resolver a partir de user a customer 

this.hasOne(models.Customer,{
        as: 'customer',
        foreignKey: 'userId'
     });

podemos crear en el mismo endpoint de customers
crear usuarios , esto podemos realizarlo 
incluyendo la seccion json en el request que 
pertenece a user

# Relaciones 1 - N 

Relacionaremos Products con Categories 
Un producto pertenece a una categoria 
una categoria puede estar asociada a muchos productos 

           ->  
categoria  ->   productos
           ->  

hasMany -> Products

en la entidad Products es donse 
asignara la relacion 
despues de crear los modelos a nivel de codigo 
y las relaciones , nos toca generar las migraciones 

npm run migrations:generate products

npm run migrations:run


## Referencias 

https://docs.docker.com/compose/how-tos/use-secrets/

https://mgallego.gitlab.io/posts/docker-volumenes-de-datos/

https://sequelize.org/

