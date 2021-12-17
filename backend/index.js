const app = require('./app');

require('dotenv').config();

const puerto=process.env.PUERTO;

 require('./database');

async function main(){
    await app.listen (puerto);
    console.log('Puerto: '+puerto);
};

main();