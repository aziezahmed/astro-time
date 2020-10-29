var express = require('express');
var router = express.Router();
var sunCalc = require('suncalc');

/* GET times listing. */
router.get('/', function(req, res, next) {

  var times = sunCalc.getTimes(new Date(), 51.52, -0.06);

  res.json({
    dawn: times.nightEnd,
    sunrise: times.sunrise,
    noon: times.solarNoon,
    sunset: times.sunset,
    dusk: times.night
  });
});

module.exports = router;
