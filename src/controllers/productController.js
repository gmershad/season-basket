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
}

module.exports = ProductController;
