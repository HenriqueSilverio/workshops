// Declares the `Model` and `View`
//-----------------------------------------------------------

var Book = Backbone.Model.extend({
    defaults: {
        title: '',
        author: ''
    }
});

var BookView = Backbone.View.extend({
    tagName: 'li',

    className: 'book-item',

    template: _.template( [
        '<b>Title:</b> <%= title %> <br>',
        '<b>Author:</b> <%= author %> <hr>' 
    ].join('') ),

    initialize: function() {
        console.log('The View has created!');
    },

    render: function() {
        var data = this.model.toJSON();
        this.$el.html( this.template( data ) );
        return this;
    }
});



// Instantiates the `Model` and `View`
//-----------------------------------------------------------

var theBookModel = new Book({ 
    title: 'Backbone.Marionette.js: A Gentle Introduction', 
    author: 'David Sulc' 
});

var theBookView = new BookView({ model: theBookModel });



// Append to the DOM
//-----------------------------------------------------------

$('body').html( theBookView.render().el );
