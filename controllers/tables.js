// /controllers/tables.js
exports.install = function() {

    // Standard **RESTful** routing
    ROUTE('GET      /api/tables/         *Tables --> query');   // Query all tables
    ROUTE('POST     /api/tables/         *Tables --> insert');  // Insert a new table
    ROUTE('PUT      /api/tables/{id}     *Tables --> update');  // Update an existing table

}
