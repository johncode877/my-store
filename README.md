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

# Trabajando con ordenes de compra
Un producto puede pertenecer a muchas ordenes de compra
y una orden de compra puede tener muchos productos

Products <-> Orders 

Se resuelve mediante una relacion en sequelize denominada 
"belongsToMany"

Un cliente puede tener muchas ordenes 

Products           Orders -> Client
           Items   


Generamos la migracion para el nuevo modelo creado de Ordenes

npm run migrations:generate --name "create-order"

npm run migrations:run 


# Relaciones M - N 

Creamos el model para la tabla orderproduct
luego generamos el boilerplate para la migracion

npm run migrations:generate --name "order-product"

npm run migrations:run

Si se desea que la entidad "Order" tenga los detalles 
de los productos a traves de la entidad "OrderProduct" 
entonces debemos hacer la asociacion en ese modelo 

# Resolviendo relaciones M - N 

A veces puede que tengamos la necesidad 
de devolver un valor calculado en base a informacion
de nuestras consultas , esto lo podemos realizar 
en sequelize con un campo de tipo VIRTUAL 

este metodo es recomendable para lista de productos
pequeños @50 max , si es mucho mayor es mejor
utilizar un query sql que realice el calculo

# Paginacion 

Limit: Límite de elementos que deseo traer en cada página.
Offset: Apuntador, es decir, cuántos elementos quiero escapar.	

Normalmente estos parametros son de tipo query


# Filtrando precios con operadores

Se añade una validacion
si se envia price_min , price_max tambien debe ser enviado

# Deploy a Cloud 

Hacemos cambios para configurar la url de la base de datos 
En las Migraciones se recomienda mejor no usar el esquema
en los scripts , si no mas bien el esquema que se tuvo en el 
momento que se ejecuto la migracion

npm run migrations:generate --name "create-tables"


railway login

railway status 

- Ejecuta la migracion inicial
railway run npx sequelize-cli db:migrate

railway run npx sequelize-cli db:seed:all

railway run npm run migrations:run


- Elimina toda la migracion realizada 
railway run npx sequelize-cli db:migrate:undo:all

Una vez que la migracion se logro realizar 
guardamos los cambios y realizamos un push a la rama en git-hub
para que Railway pueda desplegar el cambio


# Recomendaciones en el deploy 

Es mejor configurar que el despliegue
se haga cuando se realicen cambios en la rama master 
de git-hub

En ese caso configuramos la variable NODE_ENV=production
si estamos realizando cambios para probarlos en 
desarrollo , configuramos al siguiente valor 
NODE_ENV=dev





## Referencias 

https://bit.ly/3PiVBpI

https://vertabelo.com/blog/many-to-many-relationship/#:~:text=A%20ternary%20relationship%20is%20when,of%20three%20columns,%20not%20two.

https://docs.docker.com/compose/how-tos/use-secrets/

https://mgallego.gitlab.io/posts/docker-volumenes-de-datos/

https://sequelize.org/

- Uso de Scopes para ocultar ciertos datos sensibles
https://dev.to/a0viedo/handling-sensitive-fields-with-sequelize-js-54lo

- Configurar pool con sequelize
https://sequelize.org/docs/v6/other-topics/connection-pool/

- Despliegue en railway 
https://dhimas-hary.medium.com/simple-node-express-postgres-deployment-with-railway-and-supabase-2ca41097c39f

