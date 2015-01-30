'use strict';

BookStore.Views.MenuItem = Backbone.View.extend({
    tagName: 'li',

    template: getTemplate('menu-item'),

    events: {
        'click a': 'linkClicked'
    },

    initialize: function() {
        this.listenTo( this.model, 'change:active', this.render );
    },

    render: function() {
        var itemData = this.model.toJSON();
        this.$el.html( this.template( itemData ) );
        this.$el.toggleClass( 'active', this.model.get('active') );
        return this;
    },

    linkClicked: function(e) {
        if( !this.model.get('active') ) {
            this.model.collection.activeByCID( this.model.cid );
        }
    }
});
