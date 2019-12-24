$("#logout").click(function () {
    // var host = "http://127.0.0.1:8080";
    var host = "http://120.25.237.83:8096";
    if(confirm("确定要退出吗?")){
        $.ajax({
            url:host+"/logout",
            type:"GET",
			crossDomain: true,
			xhrFields: {
				withCredentials: true, // 这里设置了withCredentials
			},
            success:function (result) {
                if(result.code == 200){
                    alert("退出成功！");
                    window.location.href=("login.html");
                }
                if(result.code == 1000){
                    alert(result.data);
                }
            },
            error:function () {
                alert("异常!");
            }
        })
    }
})