class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;
            const product = await this.productService.createProduct(productData);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Unable to create product' });
        }
    }

    async getProductById(req, res) {
        try {
            const productId = req.params.productId;
            const product = await this.productService.findProductById(productId);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.json(product);
            }
        } catch (error) {
            console.error('Error retrieving product:', error);
            res.status(500).json({ error: 'Unable to retrieve product' });
        }
    }


    async updateProductById(req, res) {
        try {
            const productId = req.params.productId;
            const updates = req.body;
            const result = await this.productService.updateProductById(productId, updates);
            if (result.updatedCount === 0) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.json(result.updatedProducts[0]);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ error: 'Unable to update product' });
        }
    }

    async deleteProductById(req, res) {
        try {
            const productId = req.params.productId;
            const deletedCount = await this.productService.deleteProductById(productId);
            if (deletedCount === 0) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.json({ message: 'Product deleted successfully' });
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Unable to delete product' });
        }
    }

    async getProductDetails(req, res) {
        try {
            const productId = req.params.productId;
            const product = await this.productService.getProductDetails(productId);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.json(product);
            }
        } catch (error) {
            console.error('Error retrieving product:', error);
            res.status(500).json({ error: 'Unable to retrieve product' });
        }
    }

    async createProductSeason(req, res) {
        try {
            const productSeasonData = req.body;
            const newProductSeason = await this.productService.createProductSeason(productSeasonData);
            res.status(201).json(newProductSeason);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllProductSeasons(req, res) {
        try {
            const productSeasons = await this.productService.getAllProductSeasons();
            res.status(200).json(productSeasons);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getProductSeasonById(req, res) {
        try {
            const productSeasonId = req.params.productSeasonId;
            const productSeason = await this.productService.getProductSeasonById(productSeasonId);
            res.status(200).json(productSeason);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getPaginatedProductDetails(req, res) {
        try {
            const pageNumber = parseInt(req.params.pageNumber);
            const pageSize = parseInt(req.params.pageSize);
            const products = await this.productService.getPaginatedProductDetails(pageNumber, pageSize);
            if (!products) {
                res.status(404).json({ error: 'Products not found' });
            } else {
                res.json(products);
            }
        } catch (error) {
            console.error('Error retrieving product:', error);
            res.status(500).json({ error: 'Unable to retrieve product' });
        }
    }

    async createProductNutrition(req, res) {
        try {
            const productNutritionData = req.body;
            const productNutrition = await this.productService.createProductNutrition(productNutritionData);
            res.status(201).json(productNutrition);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async findProductNutritionByProductId(req, res) {
        try {
            const productId = req.params.productId;
            const productNutritionEntries = await this.productService.findProductNutritionByProductId(productId);
            res.status(200).json(productNutritionEntries);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateProductNutritionByNutritionId(req, res) {
        try {
            const nutritionId = req.params.nutritionId;
            const updates = req.body;
            const [updatedCount, updatedProductNutrition] = await this.productService.updateProductNutritionByNutritionId(
                nutritionId,
                updates
            );
            res.status(200).json({ updatedCount, updatedProductNutrition });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteProductNutritionByNutritionId(req, res) {
        try {
            const nutritionId = req.params.nutritionId;
            const deletedCount = await this.productService.deleteProductNutritionByNutritionId(nutritionId);
            res.status(200).json({ deletedCount });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    async createProductHealth(req, res) {
        try {
            const productHealthData = req.body;
            const newProductHealth = await this.productService.createProductHealth(productHealthData);
            res.status(201).json(newProductHealth);
        } catch (error) {
            console.error("Error creating product health:", error);
            res.status(500).json({ error: "Failed to create product health" });
        }
    }

    async getProductHealth(req, res) {
        try {
            const productId = req.params.productId;
            const productHealth = await this.productService.getProductHealth(productId);
            if (productHealth) {
                res.status(200).json(productHealth);
            } else {
                res.status(404).json({ error: "Product health not found" });
            }
        } catch (error) {
            console.error("Error finding product health:", error);
            res.status(500).json({ error: "Failed to retrieve product health" });
        }
    }

    async updateProductHealth(req, res) {
        try {
            const healthId = req.params.healthId;
            const updatedProductHealth = await this.productService.updateProductHealth(healthId, req.body);
            if (updatedProductHealth) {
                res.status(200).json(updatedProductHealth);
            } else {
                res.status(404).json({ error: "Product health not found" });
            }
        } catch (error) {
            console.error("Error updating product health:", error);
            res.status(500).json({ error: "Failed to update product health" });
        }
    }

    async deleteProductHealth(req, res) {
        try {
            const healthId = req.params.healthId;
            const isDeleted = await this.productService.deleteProductHealth(healthId);
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "Product health not found" });
            }
        } catch (error) {
            console.error("Error deleting product health:", error);
            res.status(500).json({ error: "Failed to delete product health" });
        }
    }
}

module.exports = ProductController;
