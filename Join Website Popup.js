var url = "/api/v1/api.php";

var request = {
	"jsonrpc": "2.0",
	"id": Math.round(Math.random() * (999999 - 100000) + 100000),
	"method": "User.get",
	"params": {
	}
};

$(document).ready(function(){

	$.post(url, JSON.stringify(request), function(response) {
		if (response.result) {
			if (response.result.logged_in === true) {
				if (response.result.registered === false) {
					
					//Do This If They're Logged In But Haven't Joined
					Enjin_Core.joinWebsiteRegular("");

				}
			}
		} else if (response.error) {
			console.log(response.error.message)
		}
	});

});
