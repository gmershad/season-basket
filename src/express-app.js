const express = require("express");
const cors = require("cors");

const createCountryController = require('./controllers/countryController');
const createCountryService = require('./services/countryService');
const createCountryRepository = require('./database/repository/countryRepository');

const createStateController = require("./controllers/stateController");
const createStateService = require("./services/stateService");
const createStateRepository = require("./database/repository/stateRepository");


const createProductController = require("./controllers/productController");
const createProductService = require("./services/productService");
const createProductRepository = require("./database/repository/ProductRepository");
const createproductDetailAggregate = require("./database/repository/ProductDetailsAggregate");

const createProductNutritionController = require('./controllers/ProductNutritionController');
const createProductNutritionService = require('./services/ProductNutritionService');
const createProductNutritionRepository = require("./database/repository/productNutritionRepository");

const createProductSeasonController = require('./controllers/productSeasonController');
const createProductSeasonService = require('./services/productSeasonService');
const createProductSeasonRepository = require("./database/repository/productSeasonRepository");

const createSeasonController = require('./controllers/seasonController');
const createSeasonService = require('./services/seasonService');
const createSeasonRepository = require("./database/repository/seasonRepository");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger-config");

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + "/public"));
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    const countryRepository = new createCountryRepository();
    const countryService = new createCountryService(countryRepository);
    const stateRepository = new createStateRepository();
    const stateService = new createStateService(stateRepository);
    const productRepository = new createProductRepository();
    const ProductDetailsAggregate = new createproductDetailAggregate();
    const productService = new createProductService(productRepository, ProductDetailsAggregate);
    const productNutritionRepository = new createProductNutritionRepository();
    const productNutritionService = new createProductNutritionService(productNutritionRepository);
    const productSeasonRepository = new createProductSeasonRepository();
    const productSeasonService = new createProductSeasonService(productSeasonRepository);

    const seasonRepository = new createSeasonRepository();
    const seasonService = new createSeasonService(seasonRepository);

    const controllers = {
        countryController: new createCountryController(countryService),
        stateController: new createStateController(stateService),
        productController: new createProductController(productService),
        productNutritionController: new createProductNutritionController(productNutritionService),
        productSeasonController: new createProductSeasonController(productSeasonService),
        seasonController: new createSeasonController(seasonService)
    };

    const combinedRouter = require('./routes')(controllers);
    app.use(combinedRouter);
};
