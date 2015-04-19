var app = {
  	name: "Phone Final Project",
  	version: "1.0",
	full: document.getElementById('full'),
	thumb:  document.getElementById('thumb'),
	context: full.getContext('2d'),
	tcontext: thumb.getContext('2d'),
	i: document.createElement("img"),
	w: 0,
	h: 0,
	aspectratio: 0,
	
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
		document.addEventListener("DOMContentLoaded", app.onDomReady);
		//document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDomReady: function() {
		app.menuhammers();
		app.phototake();
		
		//list.initlist();
	 
  	},

    onDeviceReady: function() {
		app.phototake();
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
				//app.listphotos();
			});
			
		takePhoto = document.getElementById("righttab");
		  // replace with hammer
		  var mchammertime = new Hammer(takePhoto);	
			var Tap2 = new Hammer.Tap({event: 'tap' });
			mchammertime.add([Tap2]);

			mchammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);				
				app.phototake();
			});
	},
	
	phototake: function() {
		  //good idea to set the size of the canvas in Javascript in addition to CSS
		  
		  
		  app.full.height = 600;
		  app.full.width = 500;
		  app.thumb.height = 300;
		  app.thumb.width = 180;
		  app.i.addEventListener("load", function(ev){
				//load to canvas after the image is loaded
				//in this sample the original is 300px x 430px
				//we want to resize it to fill the height of our canvas - 600px;
				//alert( i.width + " " + i.height
				
				var imgWidth = app.i.width;
				var imgHeight = app.i.height;
				app.aspectRatio = imgWidth / imgHeight;
				//alert(aspectRatio)
				app.full.height = 600;
				full.style.height = "600px";
				var fw = 600 * app.aspectRatio;
				app.full.width = fw;
				full.style.width = fw + "px";
				app.i.width = fw;
				app.i.height = 600;
				app.full.width = app.i.width;
				app.full.style.width = app.i.width + "px";
				app.full.height = app.i.height;
				app.full.style.height = app.i.height + "px";
				app.context.drawImage(app.i, 0, 0, fw, 600);
				//drawImage(image, x-position, y-position, width, height)
				
					//thumbnail
				app.thumb.width = 180;
				app.thumb.style.width = "180px";
				var th = 180 / app.aspectRatio;
				app.thumb.height = th;
				app.thumb.style.height = th + "px";
				app.i.width = 180;
				app.i.height = th;
				app.tcontext.drawImage(app.i, 0, 0, 180, th);
				
				
		  });
		  app.i.crossOrigin = "Anonymous";
		  //the crossOrigin property will let you use images from different domains IF the SERVER allows it
		  //and if you are using Chrome or Firefox
		  //https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
		  
		  // this is the picture that will come in from the tablet - width cant be bigger than 500
		  
		  app.i.src = "http://www.gq.com/images/entertainment/2013/01/bill-murray/bill-murray-300.jpg";
		  

		  
		  
		  changeText = document.getElementById("b");
		  // replace with hammer
		  var hammertime = new Hammer(changeText);	
			var Tap = new Hammer.Tap({event: 'tap' });
			hammertime.add([Tap]);

			hammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);				
				app.addText();
			});
			
			savePhoto = document.getElementById("s");
		  // replace with hammer
		  var mchammertime = new Hammer(savePhoto);	
			var Tap2 = new Hammer.Tap({event: 'tap' });
			mchammertime.add([Tap2]);

			mchammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);				
				app.savePhoto();
			});
		  
		  
		},
		
		addText: function(ev){
			var txt = document.getElementById("t").value;
			  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
			  if(txt != ""){
					//clear the canvas
					app.context.clearRect(0, 0, app.full.w, app.full.h);
					app.tcontext.clearRect(0,0, app.thumb.width, app.thumb.height);
					//app.context.clearRect(0, 0, app.c.w, app.c.h);
					//reload the big image
					var wid = app.full.width;
					var hei = app.full.height;
					app.context.drawImage(app.i, 0, 0, wid, hei);
					
					//reload the thumbnail
					var widt = app.thumb.width;
					var heig = app.thumb.height;
					app.tcontext.drawImage(app.i, 0, 0, widt, heig);
					
					//THEN add the new text to the big image
					var middle = app.full.width / 2;
					var top = app.full.height - app.full.height + 50;
					var bottom = app.full.height - 50;
					app.context.font = "20px sans-serif";
					app.context.fillStyle = "red";
					app.context.strokeStyle = "gold";
					app.context.textAlign = "center";
					
					//add text to the little image
					var tmiddle = app.thumb.width / 2;
					var ttop = app.thumb.height - app.thumb.height + 20;
					var tbottom = app.thumb.height - 20;
					app.tcontext.font = "10px sans-serif";
					app.tcontext.fillStyle = "red";
					app.tcontext.strokeStyle = "gold";
					app.tcontext.textAlign = "center";					
					
					
					
					var radios = document.getElementsByName('placement');
					var value;
					for (var i = 0; i < radios.length; i++) {
						if (radios[i].type === 'radio' && radios[i].checked) {
							// get value, set checked flag or do whatever you need to
							value = radios[i].value;       
						}
					}
					
					if ( value === "top" )
					{
						app.context.fillText(txt, middle, top);
						app.context.strokeText(txt, middle, top);
						app.tcontext.fillText(txt, tmiddle, ttop);
						app.tcontext.strokeText(txt, tmiddle, ttop);
					} 
					if (value === "bottom" )
				    {
						app.context.fillText(txt, middle, bottom);
						app.context.strokeText(txt, middle, bottom);
						app.tcontext.fillText(txt, tmiddle, tbottom);
						app.tcontext.strokeText(txt, tmiddle, tbottom);
					}
			  }
		},
		
		savePhoto: function(ev)
		{
		// need to make device_id  - unique id for device
		// img - base64 string 
		// thumbnail - base64 string 
		
			//var fullpng = full.toDataURL("image/png");
			//var thumbpng = thumb.toDataURL("image/png");
			//fullpng = encodeURIComponent( fullpng );
			//thumbpng = encodeURIComponent( thumbpng );
			//var url = "http://faculty.edumedia.ca/griffis/mad9022/final-w15/save.php";
			//var postData = "dev=234234&thumb=" + thumbpng + "&img=" + fullpng;
			//sendRequest(url, imgSaved, postData);
		
		},
		imgSaved: function(xhr)
		{
			alert(xhr.responseText);
		}
};
app.initialize();
