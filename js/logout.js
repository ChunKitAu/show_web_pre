$("#logout").click(function () {

    if(confirm("确定要退出吗?")){
        $.ajax({
            url:"http://10.0.57.28:8080/logout",
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