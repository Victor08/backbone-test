define([
    'backbone'
], function(Backbone){

    var BookRouter = Backbone.Router.extend({

        routes: {
            'page/:num': 'showPage'
        },

        showPage: function(num){

        }

    });

    return BookRouter;

});