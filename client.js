const request = require('request')


var send_request = () => {
   return new Promise((resolve) => {
   	request(`http://127.0.0.1:3000/`, (err, res, body) => {
			  if (err) { return console.log(err); }
			  console.log(body);
			  resolve();
	});
  });
}

var myRequest = function (n,typeRequest){
	var p = Promise.resolve();
	for (var i=0; i<n; i++) {
		if (typeRequest=='true') {p = p.then(send_request);}
		else {send_request();}
	}
}


module.exports.myRequest = myRequest;

