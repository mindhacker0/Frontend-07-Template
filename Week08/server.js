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
		response.end("hello world\n");
	});
	
}).listen(8080);
console.log("server start");