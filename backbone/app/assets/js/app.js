'use strict';

// Template helper
var getTemplate = function(id) {
    var tplString = $('#' + id).html();
    return _.template( tplString );
};


// Application
var BookStore = {
    Views: {},
    Models: {},
    Collections: {}
};


// Turns the main application object
// into a global message bus.
_.extend(BookStore, Backbone.Events);
