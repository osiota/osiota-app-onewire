var W1Temp = require("w1temp");

exports.init = function(node, app_config, main, host_info) {
	var timer = [];

	var get_temperature_interval = function(node, sensor, sid) {
		var sid
		console.log("set Interval", sensor.file);
		var t = setInterval(function() {
			console.log("interval", sid);
			sensor.getTemperatureAsync().then(function(temp){
				console.log('Actual temp:', temp, 'C', sid);
				node.publish(undefined, temp);
			}).catch(function(err) {
				throw err;
			});
		}, 5000);
		timer.push(t);
	};

	var map = node.map(app_config.map, null, true, undefined,
		function(n, metadata, c) {
			var sid = c.map;

			// get instance of temperature sensor
			W1Temp.getSensor(sid, false).then(function (sensor) {
				// print actual temperature

				get_temperature_interval(n, sensor, sid);
			}).catch(function(err) {
				throw err;
			});

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
		});
	}).catch(function(err) {
		throw err;
	});
	return [map, timer];
}

