const bcrypt = require('bcrypt');


async function verifyPassword() {

    const myPassword = '4dM1n*7315@.209';
    const hash = '$2b$10$tzr2ZPlr5ZSSar.aSFHbEObZeYVxTSTamwqRlSzR0EjXUE0K56AQO';

    const isMatch = await bcrypt.compare(myPassword, hash);

    console.log(isMatch);

}

verifyPassword();
