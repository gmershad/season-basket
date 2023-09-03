const getProductDetail = (productId, imageUrl) => {
    const data = [
        {
            "ProductId": "P001",
            "CountryId": "C01",
            "Name": "Apple",
            "Type": "Fruit",
            "ImgUrl": `${imageUrl}apple.jpg`,
            "Description": "Test",
            "Nutrients": [10],
            "Health": {
                "Good": ["Fibre", "Vitamin C", "Antioxidants", "Potassium"],
                "Bad": {
                    "diseaseId": []
                }
            },
            "AllergyInfo": "test"
        }
    ];

    const product = data.find((item) => item.ProductId === productId);
    return product || null;
};



module.exports = {
    getProductDetail,
};
