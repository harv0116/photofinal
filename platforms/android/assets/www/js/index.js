var app = {
  	name: "Phone Final Project",
  	version: "1.0",
	deviceID: 0,
	
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
		//document.addEventListener("DOMContentLoaded", app.onDomReady);
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDomReady: function() {
		//app.menuhammers();
		//take.phototake();
		
		//list.initlist();
	 
  	},

    onDeviceReady: function() {
		app.menuhammers();
		app.deviceID = device.uuid;
		take.phototake();
		//list.initlist();
	 
  	},
	
	menuhammers: function(ev) {
		
		listphotos = document.getElementById("lefttab");
		  // replace with hammer
		  var hammertime = new Hammer(listphotos);	
			var Tap = new Hammer.Tap({event: 'tap' });
			hammertime.add([Tap]);

			hammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);				
				// ANNA's stuff
				document.querySelector("#lefttab").className = "focus";
				document.querySelector("#listphoto").style.display="block";
				document.querySelector("#takephoto").style.display="none";
				downloadGrid();
			});
			
		takePhoto = document.getElementById("righttab");
		  // replace with hammer
		  var mchammertime = new Hammer(takePhoto);	
			var Tap2 = new Hammer.Tap({event: 'tap' });
			mchammertime.add([Tap2]);

			mchammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);
				document.querySelector("#takephoto").style.display="block";
				document.querySelector("#listphoto").style.display="none";				
				take.useCamera();
			});
	}
	

};
app.initialize();
