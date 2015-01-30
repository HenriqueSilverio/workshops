// Declares the `Model`
//-----------------------------------------------------------

var Book = Backbone.Model.extend({
    defaults: {
        title: '',
        author: ''
    }
});


// Instantiates the Model
//-----------------------------------------------------------

var book1 = new Book({ title: 'Full Stack Web Development with Backbone.js' });



// Plays with the Model
//-----------------------------------------------------------

console.log( book1.get('title') );
// => 'Full Stack Web Development with Backbone.js'

book1.set('title', 'Backbone.js Cookbook');

console.log( book1.get('title') );
// => 'Backbone.js Cookbook'

book1.set({
    title: 'Building Backbone Plugins',
    author: 'Derick Bailey'
});

book1.toJSON();
// => Object {title: "Building Backbone Plugins", author: "Derick Bailey"}
