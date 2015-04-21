// JavaScript Document
var take = {
	full: document.getElementById('full'),
	thumb:  document.getElementById('thumb'),
	context: full.getContext('2d'),
	tcontext: thumb.getContext('2d'),
	w: 0,
	h: 0,
	aspectratio: 0,
	img: "",

	
	phototake: function() {
		  //good idea to set the size of the canvas in Javascript in addition to CSS
		  
		  take.full.height = 400;
		  take.full.width = 600;
		  take.thumb.height = 100;
		  take.thumb.width = 180;
		  		  
		  changeText = document.getElementById("b");
		  // replace with hammer
		  var hammertime = new Hammer(changeText);	
			var Tap = new Hammer.Tap({event: 'tap' });
			hammertime.add([Tap]);

			hammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);				
				take.addText();
			});
			
			savePhoto = document.getElementById("s");
		  // replace with hammer
		  var mchammertime = new Hammer(savePhoto);	
			var Tap2 = new Hammer.Tap({event: 'tap' });
			mchammertime.add([Tap2]);

			mchammertime.on('tap', function(ev) {
				ev.preventDefault();
				console.log(ev);				
				take.savePhoto();
			});
		  
		  
		},
		
		addText: function(ev){
			var txt = document.getElementById("t").value;
			  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
			  
			  if(txt != "" && txt.length <= 30){
				  
					//clear the canvas
					take.context.clearRect(0, 0, take.full.width, take.full.height);
					take.tcontext.clearRect(0, 0, take.thumb.width, take.thumb.height);
					//take.context.clearRect(0, 0, take.c.w, take.c.h);
					
					//reload the big image
					var wid = take.full.width;
					var hei = take.full.height;
					take.context.drawImage(take.img, 0, 0, wid, hei);
					
					//reload the thumbnail
					var widt = take.thumb.width;
					var heig = take.thumb.height;
					take.tcontext.drawImage(take.img, 0, 0, widt, heig);
					
					//THEN add the new text to the big image
					var middle = take.full.width / 2;
					var top = take.full.height - take.full.height + 50;
					var bottom = take.full.height - 50;
					take.context.font = "20px sans-serif";
					take.context.fillStyle = "red";
					take.context.strokeStyle = "gold";
					take.context.textAlign = "center";
					
					//add text to the little image
					var tmiddle = take.thumb.width / 2;
					var ttop = take.thumb.height - take.thumb.height + 20;
					var tbottom = take.thumb.height - 20;
					take.tcontext.font = "10px sans-serif";
					take.tcontext.fillStyle = "red";
					take.tcontext.strokeStyle = "gold";
					take.tcontext.textAlign = "center";					
					
					
					
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
						take.context.fillText(txt, middle, top);
						take.context.strokeText(txt, middle, top);
						take.tcontext.fillText(txt, tmiddle, ttop);
						take.tcontext.strokeText(txt, tmiddle, ttop);
					} 
					if (value === "bottom" )
				    {
						take.context.fillText(txt, middle, bottom);
						take.context.strokeText(txt, middle, bottom);
						take.tcontext.fillText(txt, tmiddle, tbottom);
						take.tcontext.strokeText(txt, tmiddle, tbottom);
					}

			  }
		},
		
		savePhoto: function(ev)
		{
		
			var fullpng = full.toDataURL("image/png");
			var thumbpng = thumb.toDataURL("image/png");
			fullpng = encodeURIComponent( fullpng );
			thumbpng = encodeURIComponent( thumbpng );
			
			var url = "http://m.edumedia.ca/ioud0001/mad9022/final/save.php";
			//alert("app.deviceID=" + app.deviceID)
			var postData = "dev=" + app.deviceID; + "&thumb=" + thumbpng + "&img=" + fullpng;
			sendRequest(url, take.imgSaved, postData);
		
		},
		imgSaved: function(xhr)
		{
			//alert(xhr.responseText);
			alert("Image Saved");
		},
		useCamera: function()
		{
			navigator.camera.getPicture(take.onSuccess, take.onFail, {quality: 50, encodingType: Camera.EncodingType.PNG, destinationType: Camera.DestinationType.DATA_URL });
		
		},
		onSuccess: function(imageData)
		{	
			
			var cameraCapture = "data:image/png;base64," + imageData;
			
			
						
			take.img = new Image();
			
			take.img.src = cameraCapture;
			take.img.onload = function(){ 
				var imgWidth = take.img.width;
				var imgHeight = take.img.height;
				take.aspectRatio = imgHeight / imgWidth ;
				
				take.full.width = 600;
				full.style.width = "600px";
			 	var fh = 600 * take.aspectRatio;
				take.full.height = fh;
				full.style.height = fh + "px";
				take.img.height = fh;
				take.img.width = 600;
				take.full.width = take.img.width;
				take.full.style.width = take.img.width + "px";
				take.full.height = take.img.height;
				take.full.style.height = take.img.height + "px";
				take.context.drawImage(take.img, 0, 0, 600, fh);
				//drawImage(image, x-position, y-position, width, height)
				
					//thumbnail
				take.thumb.width = 180;
				take.thumb.style.width = "180px";
				var th = 180 * take.aspectRatio;
				take.thumb.height = th;
				take.thumb.style.height = th + "px";
				take.img.width = 180;
				take.img.height = th;
				take.tcontext.drawImage(take.img, 0, 0, 180, th);
			}
				img.crossOrigin = "Anonymous";
				
		},
		onFail: function(message)
		{
			alert("Failed because:" + message);
		}
}
//take.phototake();