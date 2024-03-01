var d = new Date(Date.now() - 967896000000);
var a = String(Math.abs(d.getUTCFullYear() - 1970));
var cag = document.getElementsByClassName('cag');

for (var i = 0; i < cag.length; i++){
	cag[i].outerHTML = a + '&nbsp;';
}
