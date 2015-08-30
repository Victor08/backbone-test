define([
    'backbone',
    'jquery',
    'underscore',
    'text!components/book/book.html',
    'scripts/models/book-page'
], function(Backbone, $, _, bookTemplate, BookPage) {
    'use strict';

    var App = Backbone.View.extend({

        el: 'body',

        currentPage: {},

        template: _.template(bookTemplate),

        events: {
            'click [data-action="book.nextPage"]': 'showNextPage',
            'click [data-action="book.prevPage"]': 'showPrevPage'
        },

        initialize: function() {
            this.currentPage = new BookPage({
                num: 1
            });
            this.currentPage.on('change', this.handlePageChange.bind(this));
            this.render();
        },

        showNextPage: function(){
            console.log('next page');
            var num = this.currentPage.attributes.num + 1;
            this.currentPage.changePage(num);
        },

        showPrevPage: function(){
            var num = this.currentPage.attributes.num - 1;
            this.currentPage.changePage(num);
        },

        handlePageChange: function(){
            this.render();
        },

        render: function(){
            console.log('render');
            var page = this.template({
                num: this.currentPage.attributes.num,
                text: this.currentPage.attributes.text
            });
            $(this.el).empty().append(page);
        }

    });

    return App;
});