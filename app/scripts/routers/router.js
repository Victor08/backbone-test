define([
    'backbone',
    'scripts/models/book',
    'scripts/views/app'
], function(Backbone, BookModel, AppView){
    'use strict';

    var BookRouter = Backbone.Router.extend({

        bookModel: null,
        appView: null,

        routes: {
            '': 'showPage',
            'page/:num': 'showPage'
        },

        initialize: function() {
            this.bookModel = new BookModel();
            this.appView = new AppView({
                model: this.bookModel
            });
        },

        showPage: function(num){
            this.bookModel.changePage(num);
        }

    });

    return BookRouter;

});