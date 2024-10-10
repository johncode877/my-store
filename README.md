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

