const upload = require('../infrastructure/middlewares//multer-config');

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
            const productId = parseInt(req.params.productId);
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

    async getPaginatedProductDetails(req, res) {
        try {
            const pageNumber = parseInt(req.params.pageNumber);
            const pageSize = parseInt(req.params.pageSize);
            const products = await this.productService.getPaginatedProductDetails(pageNumber, pageSize);
            res.json(products);
        } catch (error) {
            console.error('Error retrieving products:', error);
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

    async getProductSeasonByProductId(req, res) {
        try {
            const productId = req.params.productId;
            const productSeason = await this.productService.getProductSeasonByProductId(productId);
            res.status(201).json(productSeason);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateProductSeason(req, res) {
        try {
            const productSeasonId = parseInt(req.params.productSeasonId);
            const productSeasonData = req.body;
            const updated = await this.productService.updateProductSeason(productSeasonId, productSeasonData);
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({ error: "Product not found" });
            }
        } catch (error) {
            console.error("Error updating product:", error);
            res.status(500).json({ error: "Failed to update product" });
        }
    }

    async deleteProductSeason(req, res) {
        try {
            const productSeasonId = req.params.productSeasonId;
            const isDeleted = await this.productService.deleteProductSeason(productSeasonId);
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "product Season not found" });
            }
        } catch (error) {
            console.error("Error deleting Product Season:", error);
            res.status(500).json({ error: "Failed to delete Product Season" });
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

    async getProductNutritionByProductId(req, res) {
        try {
            const productId = req.params.productId;
            const productNutritionEntries = await this.productService.getProductNutritionByProductId(productId);
            res.status(200).json(productNutritionEntries);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateProductNutrition(req, res) {
        try {
            const nutritionId = parseInt(req.params.nutritionId);
            const updates = req.body;
            const updatedProductNutrition = await this.productService.updateProductNutrition(
                nutritionId,
                updates
            );
            res.status(200).json(updatedProductNutrition);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteProductNutrition(req, res) {
        try {
            const nutritionId = req.params.nutritionId;
            const isDeleted = await this.productService.deleteProductNutrition(nutritionId);
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "product nutrition not found" });
            }
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
            const productId = parseInt(req.params.productId);
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
            const healthId = parseInt(req.params.healthId);
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

    async uploadProductImage(req, res) {
        try {
            const productId = req.params.productId;

            upload.array('image')(req, res, async (err) => {
                if (err) {
                    console.error('Error uploading file:', err);
                    return res.status(500).json({ error: 'Unable to upload file' });
                }

                if (!req.files || req.files.length === 0) {
                    return res.status(400).json({ error: "No files uploaded" });
                }

                const product = await this.productService.createProductImage(productId, req);
                res.status(201).json(product);
            });
        } catch (error) {
            console.error('Error uploading product image:', error);
            res.status(500).json({ error: 'Unable to upload product image' });
        }
    }

    async deleteProductImage(req, res) {
        try {
            const imageId = parseInt(req.params.imageId);
            const isDeleted = await this.productService.deleteProductImage(imageId);

            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(500).json({ error: "Failed to delete image" });
            }
        } catch (error) {
            console.error("Error deleting product image:", error);
            res.status(500).json({ error: "Unable to delete product image" });
        }
    }

    async createProductDisease(req, res) {
        try {
            const data = req.body;
            const productDisease = await this.productService.createProductDisease(data);
            res.status(201).json(productDisease);
        } catch (error) {
            console.error('Error creating product disease:', error);
            res.status(500).json({ error: 'Unable to create product disease' });
        }
    }

    async deleteProductDisease(req, res) {
        try {
            const productDiseaseId = parseInt(req.params.productDiseaseId);
            const isDeleted = await this.productService.deleteProductDisease(
                productDiseaseId
            );
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(500).json({ error: 'Failed to delete product disease' });
            }
        } catch (error) {
            console.error('Error deleting product disease:', error);
            res.status(500).json({ error: 'Unable to delete product disease' });
        }
    }

    async updateProductDisease(req, res) {
        try {
            const productDiseaseId = parseInt(req.params.productDiseaseId);
            const updatedData = req.body;

            const updatedProductDisease = await this.productService.updateProductDisease(
                productDiseaseId,
                updatedData
            );

            res.status(200).json(updatedProductDisease);
        } catch (error) {
            console.error('Error updating product disease:', error);
            res.status(500).json({ error: 'Unable to update product disease' });
        }
    }
}

module.exports = ProductController;
