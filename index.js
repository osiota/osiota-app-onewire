var W1Temp = require("w1temp");

exports.init = function(node, app_config, main, host_info) {

	var map = node.map(app_config.map, null, true, undefined,
		function(n, metadata, c) {
			metadata.type = "temperature.data";
			metadata.unit = "C";
			metadata.unit_long = "Celsius";
			n.announce(metadata);
			console.log("NODE", n.name, metadata);
		}
	);

	W1Temp.getSensorsUids(app_config.master_number)
			.then(function(sensorsUids) {
		console.log(sensorsUids);

		sensorsUids.forEach(function(sid) {
			var n = map.node(sid);
			if (!n) return;

			// get instance of temperature sensor
			W1Temp.getSensor(sid).then(function (sensor) {
				// print actual temperature
				var temp = sensor.getTemperature();
				console.log('Actual temp:', temp, 'C');
				n.publish(undefined, temp);

				// print actual temperature on changed
				sensor.on('change', function (temp) {
					console.log('Temp changed:',temp,'C');
					n.publish(undefined, temp);
				});
			});
		});
	});
	return map;
}

