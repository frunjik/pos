// /controllers/products.js
exports.install = function() {
    
    // Standard **RESTful** routing
    ROUTE('GET      /api/products/         *Products --> query');   // Query all products
    ROUTE('POST     /api/products/         *Products --> insert');  // Insert a new product
    ROUTE('PUT      /api/products/{id}     *Products --> update');  // Update an existing product

}
