const http = require('http');
var myRequest = require('./client');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
 res.statusCode = 200
 res.setHeader('Content-Type', 'text/plain')
 setTimeout(()=>{res.end('---- Hello, Otus! ------\n'); }, 3000);
});


server.listen(port, hostname, () => {
	 console.log(`Server running at http://${hostname}:${port}/`);
	 start_requst();
});

var start_requst = () => {
	myRequest.myRequest(typeof(process.argv[2])=='number' ? process.argv[2] : 4, process.argv[3] ? process.argv[3] : true);
}
 
//синхронно
//npm run request -- 4 false

//ассинхронно
//npm run request -- 5 true
