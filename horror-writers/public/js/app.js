'use strict';


requirejs.config({
 //   paths: {}
 shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
        "jquery" : "//code.jquery.com/jquery-2.1.1.min",
        "bootstrap" :  "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"  
    }
});


require([], function () {

    var app = {
        initialize: function () {
            // Your code here
        }
    };

    app.initialize();

});
