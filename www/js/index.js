var app = {
  	name: "Phone Final Project",
  	version: "1.0",
	
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
		take.inittake();
		//list.initlist();
	 
  	},
};
app.initialize();
