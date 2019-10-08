var express = require('express');
var router = express.Router();

router.use('/blog', require('./blog'));
router.use('/cafe', require('./cafe'));
router.use('/news', require('./news'));
router.get("/", function(req, res, next) {
	res.send("api 페이지입니다.");
});

module.exports = router;