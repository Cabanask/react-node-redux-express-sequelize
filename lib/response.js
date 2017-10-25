export const responseByHTTP = function (code) {
	let message ="";
	if(code == 100) {
		message = "Continue";	
	}
	if(code == 101) {
		message = "Processing";	
	}
	if(code == 102) {
		message = "Processing";	
	}
	if(code == 200) {
		message = "OK";	
	}
	if(code == 201) {
		message = "Created";
	}
	if(code == 400) {
		message = "Bad Request";
	}
	if(code == 401) {
		message = "Unauthorized";
	}
	if(code == 405) {
		message = "Method Not Allowed";
	}
	if(code == 406) {
		message = "Not Acceptable	";
	}
	if(code == 444) {
		message = "No Response";
	}
	if(code == 500) {
		message = "Internal Server Error";
	}
	return message;
}

export const handleError = function (res, method, message, code) {
  res.setHeader('Content-Type', 'application/json');
  let response = {"code":code,"method":method,status:responseByHTTP(code),"message":message};
  res.status(code || 500).json(response);
  return res;
}