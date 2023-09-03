const data = require("../Data/products");
const detailData = require("../Data/productDetail");

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

async function getProductDetail(req) {
    const productId = req.params.productId;
    const imageUrl = `${req.protocol}://${req.get('host')}/images/`;
    const result = detailData.getProductDetail(productId, imageUrl);
    return result;
}

module.exports = {
    getCatalog,
    getProductDetail
};
