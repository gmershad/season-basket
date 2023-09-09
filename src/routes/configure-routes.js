const createCountryController = require('../controllers/countryController');
const createSeasonController = require('../controllers/seasonController');
const createProductController = require('../controllers/productController');
const createDiseaseController = require('../controllers/diseaseController');
const createAuthController = require("../controllers/authController");

const createCountryService = require('../services/countryService');
const createSeasonService = require('../services/seasonService');
const createProductService = require('../services/productService');
const createDiseaseService = require('../services/diseaseService');
const createUserService = require("../services/userService");
const createIdentityService = require("../services/IdentityService");

const createCountryRepository = require('../infrastructure/repository/countryRepository');
const createSeasonRepository = require('../infrastructure/repository/seasonRepository');
const createProductRepository = require('../infrastructure/repository/productRepository');
const createproductDetailAggregate = require('../infrastructure/repository/ProductDetailsAggregate');
const createDiseaseRepository = require('../infrastructure/repository/diseaseRepository');
const createUserRepository = require("../infrastructure/repository/userRepository");


module.exports = (app) => {
    const countryRepository = new createCountryRepository();
    const countryService = new createCountryService(countryRepository);

    const seasonRepository = new createSeasonRepository();
    const seasonService = new createSeasonService(seasonRepository);

    const productRepository = new createProductRepository();
    const productDetailsAggregate = new createproductDetailAggregate();
    const productService = new createProductService(productRepository, productDetailsAggregate);

    const diseaseRepository = new createDiseaseRepository();
    const diseaseService = new createDiseaseService(diseaseRepository);

    const userRepository = new createUserRepository();
    const userService = new createUserService(userRepository);
    const identityService = new createIdentityService(userRepository);

    const controllers = {
        countryController: new createCountryController(countryService),
        seasonController: new createSeasonController(seasonService),
        productController: new createProductController(productService),
        diseaseController: new createDiseaseController(diseaseService),
        authController: new createAuthController(userService, identityService)
    };

    const combinedRouter = require('.')(controllers);
    app.use(combinedRouter);
};
