define(function(require) {
    require('plugins/extend');

    var $ = require('jquery');
    var Page = require('core/page');


    var DetailCtrl = Page.extend(function() {

        this.load = function(panel, data) {
            panel.find('form').form('load', data);
        };
        
        this.submit = function(panel, data) {
        	console.log('submit: ', panel, data);
        	return false;
        };
        
        this.next = function(panel, data) {
        	console.log('next: ', panel, data);
        	return false;
        };

    });

    return DetailCtrl;
});