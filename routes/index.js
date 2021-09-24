var express = require('express');
var router = express.Router();

var chatData = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.route('/webhook/chat').post((req, res, next) => {
  console.log(req.body);
  chatData.push(req.body.message);
  res.send(chatData);
});

router.route('/chat').get((req, res, next) => {
  res.send(chatData);
});

module.exports = router;
