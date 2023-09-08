const express = require("express");
const cors = require("cors");

const createCountryController = require('./controllers/countryController');
const createCountryService = require('./services/countryService');
const createCountryRepository = require('./repository/countryRepository');

const createSeasonController = require('./controllers/seasonController');
const createSeasonService = require('./services/seasonService');
const createSeasonRepository = require("./repository/seasonRepository");

const createProductController = require("./controllers/productController");
const createProductService = require("./services/productService");
const createProductRepository = require("./repository/ProductRepository");
const createproductDetailAggregate = require("./repository/ProductDetailsAggregate");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger-config");

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + "/public"));
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    const countryRepository = new createCountryRepository();
    const countryService = new createCountryService(countryRepository);

    const seasonRepository = new createSeasonRepository();
    const seasonService = new createSeasonService(seasonRepository);

    const productRepository = new createProductRepository();
    const ProductDetailsAggregate = new createproductDetailAggregate();
    const productService = new createProductService(productRepository, ProductDetailsAggregate);

    const controllers = {
        countryController: new createCountryController(countryService),
        seasonController: new createSeasonController(seasonService),
        productController: new createProductController(productService),
    };

    const combinedRouter = require('./routes')(controllers);
    app.use(combinedRouter);
};
