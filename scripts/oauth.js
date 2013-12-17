function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

$(document).ready(function(){
	var code = getUrlVars()["code"];
	if (code) {
		document.getElementById("page1").className='hidden';
		document.getElementById("page2").className='unhidden';
		document.getElementById("code").value=code;
	}
});
