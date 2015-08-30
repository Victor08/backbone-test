//require.config({
//  paths: {
//    'jquery': 'vendor/jquery/dist/jquery',
//    'underscore': 'vendor/underscore/underscore',
//    'backbone': 'vendor/backbone/backbone'
//  }
//});
'use strict';
require([
    'backbone',
    'scripts/views/app',
    'scripts/routers/router'
], function(AppView, BookRouter) {
    new BookRouter();
    Backbone.history.start();
    new AppView;
});