'use strict';

var BookStore = BookStore || {};


/* Model
--------------------------------------------------------------*/
BookStore.Models.MenuItem = Backbone.Model.extend({
    defaults: {
        name: '',
        url: '',
        active: false
    }
});


/* Collection
--------------------------------------------------------------*/
BookStore.Collections.Menu = Backbone.Collection.extend({
    model: BookStore.Models.MenuItem,

    resetActive: function() {
        this.each(function(item) {
            item.set('active', false);
        });
    },

    activeByCID: function(cid) {
        this.resetActive();
        var menuItem = this.get(cid);
        menuItem.set('active', true);
        return menuItem.cid;
    },
});
