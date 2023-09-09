const swaggerAutogen = require('swagger-autogen')();
const path = require('path');

const outputFile = path.resolve(__dirname, 'swagger-output.json');
const endpointsFiles = [path.resolve(__dirname, 'routes/*.js')];

swaggerAutogen(outputFile, endpointsFiles);
