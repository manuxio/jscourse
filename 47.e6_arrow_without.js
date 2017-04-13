var car = {
  model: 'Mercedes',
	speed: 0,
	accelerate: function() {
    console.log('Accelerating car', this.model);
		this.accelerator = setInterval(
			function() {
				this.speed++;
				console.log(this.speed);
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
