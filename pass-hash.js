const bcrypt = require('bcrypt');


async function hashPassword() {

    const myPassword = '4dM1n*7315@.209';
    // 10 es el numero de saltos veces que 
    // se vuelve a encriptar la clave

    const hash = await bcrypt.hash(myPassword, 10);

    console.log(hash);

}

hashPassword();


