const createCountryController = require('../controllers/countryController');
const createSeasonController = require('../controllers/seasonController');
const createProductController = require('../controllers/productController');

const createCountryService = require('../services/countryService');
const createSeasonService = require('../services/seasonService');
const createProductService = require('../services/productService');

const createCountryRepository = require('../infrastructure/repository/countryRepository');
const createSeasonRepository = require('../infrastructure/repository/seasonRepository');
const createProductRepository = require('../infrastructure/repository/productRepository');
const createproductDetailAggregate = require('../infrastructure/repository/ProductDetailsAggregate');

module.exports = (app) => {
    const countryRepository = new createCountryRepository();
    const countryService = new createCountryService(countryRepository);

    const seasonRepository = new createSeasonRepository();
    const seasonService = new createSeasonService(seasonRepository);

    const productRepository = new createProductRepository();
    const productDetailsAggregate = new createproductDetailAggregate();
    const productService = new createProductService(productRepository, productDetailsAggregate);

    const controllers = {
        countryController: new createCountryController(countryService),
        seasonController: new createSeasonController(seasonService),
        productController: new createProductController(productService),
    };

    const combinedRouter = require('.')(controllers);
    app.use(combinedRouter);
};
