'use strict';

BookStore.Views.Books = Backbone.View.extend({
    className: 'row',

    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
    },

    render: function() {
        var fragment = document.createDocumentFragment();

        this.collection.each(function(book) {
            var bookItemView = new BookStore.Views.Book({ model: book });
            fragment.appendChild(bookItemView.render().el);
        }, this);

        this.$el.html(fragment);

        return this;
    }
});
