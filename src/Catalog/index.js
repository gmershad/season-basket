const data = require("../Data/products");

async function getCatalog(req) {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const seasonId = parseInt(req.query.seasonId) || -1;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const imageUrl = `${req.protocol}://${req.get('host')}/images/`;
    let objectsForPage = data.getProductData(imageUrl, startIndex, endIndex, pageSize, seasonId);
    objectsForPage.currentPage = page;
    objectsForPage.pageSize = pageSize;
    return objectsForPage;
}

module.exports = {
    getCatalog,
};
