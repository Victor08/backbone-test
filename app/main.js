require([
    'backbone',
    'scripts/views/app',
    'scripts/routers/router',
    'requirejs'
], function(Backbone, AppView, BookRouter) {
    'use strict';

    new BookRouter();
    Backbone.history.start();

});