// /schemas/products.js

const products = TABLE('products');

// Define a new schema for 'Products'
NEWSCHEMA('Products', function(schema) {

    // Action for querying Products
    schema.action('query', {
        name: 'List Products',
        query: 'search:String',
        action: function($) {

            products
                .find()
                .callback($.callback)
                ;

        }
    });

    // Action for inserting a new Product
    schema.action('insert', {
        name: 'Insert new Product',
        input: '*title:String,price:number',
        action: function($, model) {

            // Generate a unique ID and set the creation timestamp
            model.id = UID();
            // model.dtcreated = NOW;

            products
                .insert(model)
                .callback($.done(model.id))
                ;

        }
    });

    // Action for updating a Product
    schema.action('update', {
        name: 'Update existing Product',
        params: '*id:String',
        input: '*title:String,price:number',
        action: function($, model) {

            // Update the Table with the new data
            // model.dtupdated = NOW;

            products
                .modify(model)
                .where('id', '=', $.params.id)
                .callback($.done())
                ;

        }
    });

    // Action for removing a single Product (identified by id)
    schema.action('remove', {
        name: 'Remove Product',
        params: '*id:String',
        action: function($) {

            products
                .remove()
                .where('id', '=', $.params.id)
                .callback($.done())
                ;

        } 
    });

    // Action for removing all Products
    schema.action('wipe', {
        name: 'Remove all Products',
        action: function($) {

            products
                .clear($.done())
                ;

        } 
    });

});
