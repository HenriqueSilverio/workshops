'use strict';

(function(){
    // Namespace references
    var Book            = BookStore.Models.Book,
        Books           = BookStore.Collections.Books,
        BooksView       = BookStore.Views.Books,
        BookDetailsView = BookStore.Views.BookDetails,

        MenuItem   = BookStore.Models.MenuItem,
        Menu       = BookStore.Collections.Menu,
        MenuView   = BookStore.Views.MenuView;


    // Layout DOM references
    var $menuRegion = $('#menu-region'),
        $mainRegion = $('#main-region');


    // Router contructor
    BookStore.Router = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'books': 'showHome',
            'book/:id': 'showBook',
            'books/:category': 'showCategory'
        },

        initialize: function() {
            // Stores books collection reference in router
            this.booksCollection = new Books();
            this.booksCollection.fetch();

            // Stores links collection reference in router
            this.linksCollection = new Menu([
                { name: 'Home', url: '#books', active: true },
                { name: 'JavaScript', url: '#books/javascript' },
                { name: 'Backbone', url: '#books/backbone' },
                { name: 'NoSQL', url: '#books/nosql' },
                { name: 'PHP', url: '#books/php' },
                { name: 'Ruby', url: '#books/ruby' }
            ]);

            var navbar = new MenuView({ collection: this.linksCollection });
            $menuRegion.html( navbar.render().el );
        },

        changeView: function(view) {
            if(this.currentView) {
                if(this.currentView == view) {
                    return;
                }

                this.currentView.remove();
            }

            $mainRegion.html( view.render().el );

            this.currentView = view;
        },

        showHome: function() {
            // Create and Renders the books list
            var booksView  = new BooksView({ collection: this.booksCollection });

            this.changeView(booksView);
        },

        showBook: function(id) {
            var book        = this.booksCollection.get(id),
                detailsView = new BookDetailsView({ model: book });

            this.changeView(detailsView);
        },

        showCategory: function(category) {
            var filtered           = this.booksCollection.where({ category: category }),
                filteredCollection = new Books(filtered),
                booksView          = new BooksView({ collection: filteredCollection });

            this.changeView(booksView);
        }
    });
}());
