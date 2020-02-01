function login() {

	var host = "http://120.25.237.83:8096";
	// var host = "http://127.0.0.1:8080";
	//表单的数据用ajax发送 避免页面跳转
	$.ajax({
		url: host+"/login",
		dataType: "json",
		type: "POST",
		data: $("#loginForm").serialize(),
		crossDomain: true,
		// xhrFields: {
		// 	withCredentials: true, // 携带cookie
		// },
		success: function(result) {
			console.log(result);
			if (result.code == 200) {
				var token = result.data.token;
				var time = new Date().getTime();
				window.localStorage.setItem("myToken",token+"*"+time);
				window.location.href = "crud_list.html";
			}
			if (result.code == 500) {
				alert(result.data);
			}
		},
		error: function() {
			alert("异常！");
		},
	})
};
