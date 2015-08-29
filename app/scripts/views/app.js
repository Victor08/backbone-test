define([
    'backbone',
    'jquery',
    'underscore',
    'text!components/book/book.html'
], function(Backbone, $, _, bookTemplate) {

    var App = Backbone.View.extend({

        el: 'body',

        template: _.template(bookTemplate),

        initialize: function() {
            this.render();
        },

        render: function(){
            $(this.el).append(this.template);
        }

    });

    return App;
});