//用于获取Token并进行验证过期时间
var myToken = window.localStorage.getItem("myToken");
var token = myToken.substring(0,myToken.indexOf("*"));
var time = myToken.substring(myToken.indexOf("*")+1,myToken.length);
var day = new Date().getTime() - time;
//一天86400000毫秒  1min 60000毫秒
if(day >= 5*60000){//过期重新登陆
    window.localStorage.removeItem("myToken");
    window.location.href = "login.html";
}

