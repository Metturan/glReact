export function bubble() {

	if (!window.requestAnimationFrame) {
	 window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
	 window.mozRequestAnimationFrame ||
	 window.oRequestAnimationFrame ||
	 window.msRequestAnimationFrame ||
	 function (callback) {
	 return window.setTimeout(callback, 1000/60);
	 });
	} 
	
	
	var canvas = document.querySelector('canvas');
	var context = canvas.getContext('2d');

	function drawStuff() {
		function Sphere (radius) {
			 if (radius === undefined) { radius = 40; }
			 // if (color === undefined) { color = "#ff0000"; }
			 this.x = 0;
			 this.y = 0;
			 this.radius = radius;
			 this.rotation = 0;
			 this.scaleX = 1;
			 this.scaleY = 1;
			 // this.color = utils.parseColor(color);
			 this.lineWidth = 0;
		}
		Sphere.prototype.draw = function (context) {
			 context.save();
			 context.translate(this.x, this.y);
			 context.rotate(this.rotation);
			 context.scale(this.scaleX, this.scaleY);
			 context.lineWidth = this.lineWidth;
			 context.globalAlpha = 1;
			 var grd = context.createRadialGradient(0,-20,0,30,70,250);
			 grd.addColorStop(1, 'rgba(255,255,255,1)');
			 grd.addColorStop(0, '#0080ff');
			 grd.addColorStop(0.5, '#5caeff');
			 // context.globalCompositeOperation = "lighter";
 			 context.fillStyle = grd;
			 context.beginPath();
			 //x, y, radius, start_angle, end_angle, anti-clockwise
			 context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
			 context.closePath();
			 context.fill();
			 context.restore();
		};
		function Sphere2 (radius) {
			 if (radius === undefined) { radius = 40; }
			 this.x = 0;
			 this.y = 0;
			 this.radius = radius;
			 this.rotation = 0;
			 this.scaleX = 1;
			 this.scaleY = 1;
			 this.lineWidth = 0;
		}
		Sphere2.prototype.draw = function (context) {
			 context.save();
			 context.translate(this.x, this.y);
			 context.rotate(this.rotation);
			 context.scale(this.scaleX, this.scaleY);
			 context.lineWidth = this.lineWidth;
			 context.globalAlpha = 1;
			 var grd = context.createRadialGradient(0,0,0,0,0,180);
			 grd.addColorStop(0.8, 'rgba(255,255,255,0)');
 			 grd.addColorStop(0.7, 'rgba(0, 104, 255, 0)');
			 grd.addColorStop(0, 'rgba(0, 104, 255, 0.64)');
 			 context.fillStyle = grd;
			 context.beginPath();
			 //x, y, radius, start_angle, end_angle, anti-clockwise
			 context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
			 context.closePath();
			 context.fill();
			 context.restore();
		};
		function Sphere3 (radius) {
			 if (radius === undefined) { radius = 40; }
			 // if (color === undefined) { color = "#ff0000"; }
			 this.x = 0;
			 this.y = 0;
			 this.radius = radius;
			 this.rotation = 0;
			 this.scaleX = 1;
			 this.scaleY = 1;
			 // this.color = utils.parseColor(color);
			 this.lineWidth = 0;
		}
		Sphere3.prototype.draw = function (context) {
			 context.save();
			 context.translate(this.x, this.y);
			 context.rotate(this.rotation);
			 context.scale(this.scaleX, this.scaleY);
			 context.lineWidth = this.lineWidth;
			 context.globalAlpha = 1;
			 var grd = context.createRadialGradient(0,20,0,0,0,320);
			 grd.addColorStop(0.8, 'rgba(255, 255, 255, 0)');
			 grd.addColorStop(0.6, 'rgba(0, 10, 255, 0.1)');
			 grd.addColorStop(0, 'rgba(0, 10, 255, 0.9)');
			 // context.globalCompositeOperation = "lighter";
 			 context.fillStyle = grd;
			 context.beginPath();
			 //x, y, radius, start_angle, end_angle, anti-clockwise
			 context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
			 context.closePath();
			 context.fill();
			 context.restore();
		};
		var sphere = new Sphere(310); //largest
		var sphere2 = new Sphere2(130); //smallest
		var sphere3 = new Sphere3(300); //middle
		var angle = 0;
		var angle2 = 0;
		var angle3 = 0;
		var speed2 = 0.013;
		var speed3 = 0.017;
		var range = 50;
		var speed = 0.01;
		var xspeed = 1;
		var centerScale = 1;
		var radius = 80;
		var radius2 = 100;


		sphere.x = canvas.width / 2;
		sphere.y = canvas.height / 2;
		sphere2.x = canvas.width /2;
		sphere2.y = canvas.height/2;
		sphere3.x = canvas.width /2;
		sphere3.y = canvas.height /2;


		function drawFrame() {
			window.requestAnimationFrame(drawFrame, canvas);
			context.clearRect(0,0, canvas.width, canvas.height);
			sphere3.x = canvas.width/2 + 120+ Math.sin(angle3) * 80;
			sphere3.y = canvas.height/2 -40 + Math.cos(angle3) * 80;
			sphere2.scaleX = sphere2.scaleY = centerScale + Math.sin(angle2) * 0.2;
			sphere2.x = canvas.width/2 + 40+ Math.sin(angle2) * radius2;
			sphere2.y = canvas.height/2 + Math.cos(angle2) * radius2;
			sphere.y = canvas.height/2 -40 + Math.cos(angle) * radius;
			sphere.x = canvas.width/2 + Math.sin(angle) * radius;
			angle += speed;
			angle2 += speed2;
			angle3 += speed3;
			sphere.draw(context);
			sphere3.draw(context);
			sphere2.draw(context);
		};
		drawFrame();
	};
	
	
	window.addEventListener('resize', resizeCanvas);

	function resizeCanvas() {
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

		drawStuff();
	}
	resizeCanvas();
	
}	
