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


# Conectando desde Node 

npm install pg


# Instalando paquete dotenv

npm i dotenv 

# Usando ORM - Sequelize

npm i --save sequelize 
npm i --save pg-hstore
  
  


## Referencias 

https://docs.docker.com/compose/how-tos/use-secrets/

https://mgallego.gitlab.io/posts/docker-volumenes-de-datos/

https://sequelize.org/

