define([
    'backbone',
    'text!data/page1.html',
    'text!data/page2.html',
    'text!data/page3.html'
], function(Backbone, page1, page2, page3){
    'use strict';

    function mockApi (n) {
        var result = {};

        switch (n) {
            case 1:
                result.text = page1;
                result.num = n;
                break;
            case 2:
                result.text = page2;
                result.num = n;
                break;
            case 3:
                result.text = page3;
                result.num = n;
                break;
            default:
                result.text = page1;
                result.num = 1;
        }
        return result;
    }

    var Book = Backbone.Model.extend({

        changePage: function(n) {

            n = parseInt(n);

            if (this.attributes.num === n ) {
                return;
            }
            var data = mockApi(n);

            this.attributes.text = data.text;
            this.attributes.num = data.num;

            Backbone.history.navigate('page/' + this.attributes.num);
            this.trigger('change');
        }

    });

    return Book;
});
