// JavaScript Document
var take = {
  	name: "Phone Final Project",
  	version: "1.0",
	c: 0,
	context: 0,
	i: 0,
	
    inittake: function() {
       
	   // change this to real functions
	   // take.function();
	   	  
	      take.i = document.createElement("img");
		  take.c = document.getElementById('c');
		  //good idea to set the size of the canvas in Javascript in addition to CSS
		  take.c.height = 600;
		  take.c.width = 800;
		  context = take.c.getContext('2d');
		  take.i.addEventListener("load", function(ev){
			//load to canvas after the image is loaded
			//in this sample the original is 300px x 430px
			//we want to resize it to fill the height of our canvas - 600px;
			//alert( i.width + " " + i.height)
			var imgWidth = ev.currentTarget.width;
			var imgHeight = ev.currentTarget.height;
			var aspectRatio = imgWidth / imgHeight;
			//alert(aspectRatio)
			ev.currentTarget.height = take.c.height;
			ev.currentTarget.width = take.c.height * aspectRatio;
			var w = take.i.width;
			var h = take.i.height;
			console.log("width: ", w, " height: ", h, " aspect ratio: ", aspectRatio);
			c.width = w;
			c.style.width = w + "px";
			context.drawImage(take.i, 0, 0, w, h);
			//drawImage(image, x-position, y-position, width, height)
		  });
		  take.i.crossOrigin = "Anonymous";
		  //the crossOrigin property will let you use images from different domains IF the SERVER allows it
		  //and if you are using Chrome or Firefox
		  //https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
		  take.i.src = "http://www.gq.com/images/entertainment/2013/01/bill-murray/bill-murray-300.jpg";
		  
		  document.getElementById("b").addEventListener("click", take.addText());
		},
		
		addText: function(ev){
			var txt = document.getElementById("t").value;
			  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
			  if(txt != ""){
				//clear the canvas
				context.clearRect(0, 0, take.c.w, take.c.h);
				//reload the image
				var w = take.i.width;
				var h = take.i.height;
				context.drawImage(take.i, 0, 0, w, h);
				//THEN add the new text to the image
				var middle = take.c.width / 2;
				var bottom = take.c.height - 50;
				context.font = "30px sans-serif";
				context.fillStyle = "red";
				context.strokeStyle = "gold";
				context.textAlign = "center";
				context.fillText(txt, middle, bottom);
				context.strokeText(txt, middle, bottom);
			  }
		}
};
take.inittake();