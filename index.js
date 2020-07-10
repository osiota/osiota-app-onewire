var W1Temp = require("w1temp");

exports.init = function(node, app_config, main, host_info) {
	var timer = [];

	var get_temperature_interval = function(node, sensor, sid) {
		var t = setInterval(function() {
			sensor.getTemperatureAsync().then(function(temp){
				node.publish(undefined, temp);
			}).catch(function(err) {
				console.error("Error getTemperatureAsync",
					err.stack || err
				);
			});
		}, (app_config.interval || 5) * 1000);
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
				console.error("Error getSensor",
					sid,
					err.stack || err
				);
			});

			n.announce([{
				"type": "temperature.data",
				"unit": "C",
				"unit_long": "Celsius"
			}, metadata]);
		}
	);

	W1Temp.getSensorsUids(app_config.bus_id)
			.then(function(sensorsUids) {

		sensorsUids.forEach(function(sid) {
			var n = map.node(sid);
			if (!n) return;
		});
	}).catch(function(err) {
		console.error("Error getSensorUids",
			err.stack || err
		);
	});
	return [map, timer];
}

