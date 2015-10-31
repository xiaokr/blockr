var fs = require('fs');
var url = require('url');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kr_control', function(req, res, next) {

  urlobj = url.parse(req.url, true);

  console.log("[kr_control] urlobj.query.code: %s\n",urlobj.query.code);
  fs.writeFile('kr_gened.py', urlobj.query.code, function(err){return;});

  var exec = require('child_process').exec;
  exec('python kr_gened.py', function(error,stdout,stderr){
    return;
  });

//  res.writeHead(200, { 'Content-Type': 'application/json' });
//  res.write(JSON.stringify({ status: OK }));
  res.end();

});

module.exports = router;
