'use strict';

BookStore.Views.Book = Backbone.View.extend({
    className: 'col-lg-2 book-item',

    template: getTemplate('book-item'),

    render: function() {
        var bookData = this.model.toJSON();
        this.$el.html( this.template( bookData ) );
        return this;
    }
});
