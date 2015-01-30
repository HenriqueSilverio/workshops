// Declares the `Model`
//-----------------------------------------------------------

var Book = Backbone.Model.extend({
    defaults: {
        title: '',
        author: ''
    }
});



// Declares the `Collection`
//-----------------------------------------------------------

var Library = Backbone.Collection.extend({
    model: Book
});



// Instantiates the `Collection`
//-----------------------------------------------------------

var MyLibrary = new Library([
    { title: 'Developing Backbone.js Applications', author: 'Addy Osmani' },
    { title: 'Full Stack Web Development with Backbone.js ', author: 'Patrick Mulder' },
    { title: 'Building Backbone Plugins', author: 'Derick Bailey' }
]);



// Plays with the Collection
//-----------------------------------------------------------

console.log( MyLibrary.length );
// => 3

console.log( MyLibrary.at(0).toJSON() );
// => 'Developing Backbone.js Applications'

console.log( MyLibrary.pluck('author') );
// => Array [ "Addy Osmani", "Patrick Mulder", "Derick Bailey" ]

console.log( MyLibrary.where({ author: 'Addy Osmani' }) );
// => 'Developing Backbone.js Applications'
