const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const passport = require("./utils/auth");

const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const validatorHandler = require('./middlewares/validator.handler');


const app = express();
const port = process.env.PORT || 3000;



// indica a la aplicacion
// para que procese mensajess json
app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://myapp.pe'];
const options = {
  origin: (origin,callback) => {
    if (whitelist.includes(origin) || !origin ) {
      callback(null,true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));

app.use(passport.initialize({ session: false }));



app.get('/api',(req,res) => {
  res.send('hola mi server en express');
})

app.get('/api/nueva-ruta',
  checkApiKey,
  (req,res,next) => {
  res.send('hola, soy una nueva ruta');
})


routerApi(app);


// se especifica los middleware
// que usara la aplicacion luego de
// configurar el routerApi

// es importante el orden
// de declaracion de los middlewares
// ya que en ese orden se ejecutaran


app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port:' + port);
});


