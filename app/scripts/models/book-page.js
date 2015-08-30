define([
    'backbone',
    'text!data/page1.html',
    'text!data/page2.html',
    'text!data/page3.html'
], function(Backbone, page1, page2, page3){
    'use strict';

    var Page = Backbone.Model.extend({

        defaults: {
            num: 1,
            text: page1
        },

        changePage: function(n) {
            if (this.num === n) {
                return;
            }
            switch (n) {
                case 1:
                    this.attributes.text = page1;
                    this.attributes.num = n;
                    break;
                case 2:
                    this.attributes.text = page2;
                    this.attributes.num = n;
                    break;
                case 3:
                    this.attributes.text = page3;
                    this.attributes.num = n;
                    break;
                default:
                    this.attributes.text = page1;
                    this.attributes.num = 1;
            }
            this.trigger('change');
        }

    });

    return Page;
});
