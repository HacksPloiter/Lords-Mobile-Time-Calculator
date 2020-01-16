var tempday=0,temphour=0,tempminute=0,tempsecond=0;

function but()
{
var b = parseFloat(document.getElementById("inboost").value);
var d = parseFloat(document.getElementById("inday").value);
var h = parseFloat(document.getElementById("inhour").value);
var m = parseFloat(document.getElementById("inminutes").value);
var s = parseFloat(document.getElementById("inseconds").value);
var totsecs= (d*24*60*60)+(h*60*60)+(m*60)+s;
var ressec= totsecs/(1+(b/100));
var redsec= totsecs-ressec;
dhms(totsecs);
document.getElementById("otime").innerHTML = tempday+temphour+tempminute+tempsecond;
tempday=0,temphour=0,tempminute=0,tempsecond=0;
dhms(redsec);
document.getElementById("rtime").innerHTML = tempday+temphour+tempminute+tempsecond;
tempday=0,temphour=0,tempminute=0,tempsecond=0;
dhms(ressec);
document.getElementById("ftime").innerHTML = tempday+temphour+tempminute+tempsecond;
}

function dhms(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600*24));
var h = Math.floor(seconds % (3600*24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
tempday = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
temphour = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
tempminute = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
tempsecond = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
}


