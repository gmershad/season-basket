const createCountryController = require('../controllers/countryController');
const createSeasonController = require('../controllers/seasonController');
const createProductController = require('../controllers/productController');
const createDiseaseController = require('../controllers/diseaseController');

const createCountryService = require('../services/countryService');
const createSeasonService = require('../services/seasonService');
const createProductService = require('../services/productService');
const createDiseaseService = require('../services/diseaseService');

const createCountryRepository = require('../infrastructure/repository/countryRepository');
const createSeasonRepository = require('../infrastructure/repository/seasonRepository');
const createProductRepository = require('../infrastructure/repository/productRepository');
const createproductDetailAggregate = require('../infrastructure/repository/ProductDetailsAggregate');
const createDiseaseRepository = require('../infrastructure/repository/diseaseRepository');


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

    const controllers = {
        countryController: new createCountryController(countryService),
        seasonController: new createSeasonController(seasonService),
        productController: new createProductController(productService),
        diseaseController: new createDiseaseController(diseaseService),
    };

    const combinedRouter = require('.')(controllers);
    app.use(combinedRouter);
};
