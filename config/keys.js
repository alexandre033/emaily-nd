if(process.env.NODE_ENV === "production"){
	//use the production keys
	module.exports = require('./prod');
}else{
	//use the dev keys
	module.exports = require('./dev');
}
