const http= require("http");
http.createServer((request,response)=>{
	let body=[];
	request.on("error",(err)=>{
		console.error(err);
	}).on("data",(chunk)=>{
		body.push(chunk.toString());
	}).on("end",()=>{
		body = body.join("");
		console.log("body",body);
		response.writeHead(200,{"content-Type":"text/html"});
		response.end(`<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<title>Taoism</title>
			<style>
			#myCanvas{width:100px;height:100px;}
			*{display:content-box;}
			</style>
		</head>
		<body>
		<canvas id="myCanvas"></canvas>
		<script></script>
		</body>
        </html>`);
	});
	
}).listen(8080);
console.log("server start");