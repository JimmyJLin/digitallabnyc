
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    async = require("async");

var _port = 8082;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../app"));


var profiles = [ { profile_id: "mark_01",
                   name: "Mark",
			       email: "mark@blueivytech.com",
			       vehicleCount: 11,
		  	 	   description: "Dealer description for mark."},
			     {
                   profile_id: "blue_01",
                   name: "Blue",
			       email: "blue@blueivytech.com",
			       vehicleCount: 1,
				   description: "Dealer description for mark."},
				 {
	               profile_id: "todd_01",
	               name: "Todd",
				   email: "todd@blueivytech.com",
				   vehicleCount: 7,
				   description: "Dealer description for mark."},
			     {
		           profile_id: "trevor_01",
		           name: "Trevor",
				   email: "trevor@blueivytech.com",
				   vehicleCount: 4,
				   description: "Dealer description for mark."},
               ];


// need to migrate routes out. This is messy
app.get("/v1/profiles.json", function (req, res){
	return send_success_resp(res, profiles);
});

app.get("/v1/profiles/:profile_id.json", function(req,res){
	for(var i = 0; i < profiles.length; i++){
		if(profiles[i].profile_id == req.params.profile_id){
			return send_success_resp(res, profiles[i]);
		}
	}
});

// vehicle
app.get("/v1/vehicles.json", function(req, res){
	console.log("DEBUG => app.get > " + vehicles);
	return send_success_resp(res, vehicles);
});

console.error("Starting Server ont port => " + _port);
app.listen(_port);


function send_error_resp() {
    var res, http_status, code, message;
    if (arguments.length == 4) {
        res = arguments[0];
        http_status = arguments[1];
        code = arguments[2];
        message = arguments[3];
    } else if (arguments.length == 3) {
        res = arguments[0];
        http_status = arguments[1];
        code = arguments[2].error;
        message = arguments[2].message;
    } else if (arguments.length == 2) {
        res = arguments[0];
        http_status = _http_code_from_error(arguments[1].error);
        code = arguments[1].error;
        message = arguments[1].message;
    } else {
        console.error("send_error_resp: BAD DATA");
        throw new Error("send_error_resp bad data");
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(http_status).send(JSON.stringify({ error: code, message: message }));
    res.end();
}

function send_success_resp(res, obj) {
    if (arguments.length != 2) {
        console.error("send_success_resp: BAD DATA");
        throw new Error();
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(obj));
    res.end();
}


function _http_code_from_error (error_code) {
    switch (error_code) {

      	default:
        	return 503;
    }
}
