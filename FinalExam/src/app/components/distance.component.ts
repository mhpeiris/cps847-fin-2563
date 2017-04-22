import { Component, AfterViewInit } from '@angular/core';
 
 @Component({
   selector: 'distance',
   template: `
     <h1>The Distance between Toronto and Mantreal is {{x}}. It will take {{y}} to get there.</h1>
   `,
 })

 export class DisComponent  {
	 x = '';
	y = '';
	/* 
	 getWeather(){
		x = '20';
		document.getElementById("dist").innerHTML = "Hello Angular";
 		 var json = getJSON('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Toronto&destinations=Montreal', function(err, data) {
			if (err != null) {
				console.log("Failed to read json data");
			} else {
				update_dist(data);
			}
		 });
		}
	 update_dist(data)
	 {
		 
		 
	 }
	 
	function getJSON(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("get", url, true);
	xhr.responseType = "json";
	xhr.onload = function() {
	  var status = xhr.status;
	  if (status == 200) {
		callback(null, xhr.response);
	  } else {
		callback(status);
	  }
	};
	xhr.send();
	}
	*/
 }
 