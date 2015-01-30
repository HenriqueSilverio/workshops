// Declares the `Model` and the `Collection`
//-----------------------------------------------------------

var Book = Backbone.Model.extend({
    defaults: {
        title: '',
        author: ''
    }
});

var Library = Backbone.Collection.extend({
    model: Book
});



// Declares the "ItemView" and the "CollectionView"
//-----------------------------------------------------------

var BookView = Backbone.View.extend({
    tagName: 'li',

    className: 'book-item',

    template: _.template( [
        '<b>Title:</b> <%= title %> <br>',
        '<b>Author:</b> <%= author %> <hr>' 
    ].join('') ),

    render: function() {
        var data = this.model.toJSON();
        this.$el.html( this.template( data ) );
        return this;
    }
});

var LibraryView = Backbone.View.extend({
    tagName: 'ul',

    className: 'books-list',

    render: function() {
        this.collection.each(function(book) {
            var bookItemView = new BookView({ model: book });
            this.$el.append( bookItemView.render().el );
        }, this);

        return this;
    }
});



// Instantiates the "Collection" and the "CollectionView"
//-----------------------------------------------------------

var BooksCollection = new Library([
    { title: 'Developing Backbone.js Applications', author: 'Addy Osmani' },
    { title: 'Full Stack Web Development with Backbone.js ', author: 'Patrick Mulder' },
    { title: 'Building Backbone Plugins', author: 'Derick Bailey' },
    { title: 'Backbone.Marionette.js: A Gentle Introduction', author: 'David Sulc' }
]);

var theLibraryView = new LibraryView({ collection: BooksCollection });



// Append the `CollectionView` to the DOM
//-----------------------------------------------------------

$('body').html( theLibraryView.render().el );
