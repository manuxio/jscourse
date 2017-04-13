var car = {
	model: 'Mercedes',
	speed: 0,
	accelerate: function() {
		console.log('Accelerating car', this.model);
		var self = this;
		this.accelerator = setInterval(
			function() {
				self.speed++;
				console.log(self.speed);
			},
			100
		);
	},
	cruise: function() {
		clearInterval(this.accelerator);
		console.log('cruising at ' + this.speed + ' mph');
	}
};

car.accelerate();

setTimeout(function() { car.cruise(); }, 5000);
