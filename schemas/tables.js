// /schemas/tables.js

const tables = TABLE('tables');

// Define a new schema for 'Tables'
NEWSCHEMA('Tables', function(schema) {

    // Action for querying Tables
    schema.action('query', {
        name: 'List Tables',
        query: 'search:String',
        action: function($) {

            tables
                .find()
                .callback($.callback)
                ;

        }
    });

    // Action for inserting a new Table
    schema.action('insert', {
        name: 'Insert new Table',
        input: '*title:String',
        action: function($, model) {

            // Generate a unique ID and set the creation timestamp
            model.id = UID();
            // model.dtcreated = NOW;

            tables
                .insert(model)
                .callback($.done(model.id))
                ;

        }
    });

    // Action for removing a single Table (identified by id)
    schema.action('remove', {
        name: 'Remove Table',
        params: '*id:String',
        action: function($) {

            tables
                .remove()
                .where('id', '=', $.params.id)
                .callback($.done())
                ;

        } 
    });

    // Action for removing all Tables
    schema.action('wipe', {
        name: 'Remove all Tables',
        action: function($) {

            tables
                .clear($.done())
                ;

        } 
    });

});
