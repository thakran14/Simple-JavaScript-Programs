<html>
<body>
 <p id="href"></p>
<script language="javascript">
var x = "Cookies Enabled: " + navigator.cookieEnabled;
document.writeln(x);

var y= "\n Engine name: " + navigator.product;
document.writeln(y);

var z= "\n Version: " + navigator.appVersion;
document.writeln(z);

var a= "\n Language: " + navigator.language;
document.writeln(a);
require('os');
var os = "OS: " + os.type();
document.writeln(os);



document.getElementById("href").innerHTML = 
 "The full URL of this page is:<br>" + window.location.href;
 document.writeln(href);




</script>
</body>
</html>