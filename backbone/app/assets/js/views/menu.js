'use strict';

BookStore.Views.MenuView = Backbone.View.extend({
    tagName: 'ul',

    className: 'nav nav-justified',

    render: function() {
        var fragment = document.createDocumentFragment();

        this.collection.each(function(item) {
            var menuItemView = new BookStore.Views.MenuItem({ model: item });
            fragment.appendChild(menuItemView.render().el);
        }, this);

        this.$el.append(fragment);

        return this;
    }
});
