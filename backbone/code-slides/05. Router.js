var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'showHome',
        'book/:id' : 'showBook'
    },

    showBook: function(id) {
        // ... get the book by id
        // ... create and render a view
        // etc
    }
});


var appRouter = new AppRouter();

Backbone.history.start();
