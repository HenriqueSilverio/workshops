'use strict';

BookStore.Views.BookDetails = Backbone.View.extend({
    className: 'row',

    template: getTemplate('book-details'),

    render: function() {
        var data = this.model.toJSON();
        this.$el.html( this.template( data ) );
        return this;
    }
});
