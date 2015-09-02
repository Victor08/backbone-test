define([
    'backbone',
    'jquery',
    'underscore',
    'text!components/book/book.html',
    'scripts/models/book',
    'text!components/book/page.html'
], function(Backbone, $, _, bookTpl, Book, pageTpl) {
    'use strict';

    var App = Backbone.View.extend({

        el: 'body',

        template: _.template(bookTpl),

        pageTpl: _.template(pageTpl),

        events: {
            'click [data-action="book.nextPage"]': 'showNextPage',
            'click [data-action="book.prevPage"]': 'showPrevPage'
        },

        initialize: function() {
            this.model.on('change', this.handlePageChange.bind(this));
            this.render();
        },

        showNextPage: function(){
            var num = this.model.attributes.num + 1;
            this.model.changePage(num);
        },

        showPrevPage: function(){
            var num = this.model.attributes.num - 1;
            this.model.changePage(num);
        },

        handlePageChange: function(){
            var page = this.pageTpl({
                num: this.model.attributes.num,
                text: this.model.attributes.text
            });
            $('#bookTextContent', this.el).empty().append(page);
        },

        render: function(){
            var book = this.template();
            $(this.el).empty().append(book);
        }

    });

    return App;
});