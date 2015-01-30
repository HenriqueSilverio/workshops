'use strict';

var BookStore = BookStore || {};


/* Model
--------------------------------------------------------------*/
BookStore.Models.Book = Backbone.Model.extend({
    defaults: {
        title: '',
        author: '',
        pages: 0,
        ISBN: '',
        thumbSmall: 'assets/img/default-sm.jpg',
        thumbLarge: 'assets/img/default-lg.jpg',
        resume: ''
    }
});


/* Collection
--------------------------------------------------------------*/
BookStore.Collections.Books = Backbone.Collection.extend({
    model: BookStore.Models.Book,

    localStorage: new Backbone.LocalStorage('Backbone-Workshop-Books'),

    fetch: function(opts) {
        var that = this,
            allBooks = null;

        if(!localStorage.getItem('Backbone-Workshop-Books')) {
            allBooks = $.getJSON('assets/data/books.json');

            $.when(allBooks).done(function(books) {
                _.each(books, function(book) {
                    that.create(book);
                });

                that.reset(books);
            });
        } else {
            return Backbone.Collection.prototype.fetch.call(this, opts);
        }
    }
});
