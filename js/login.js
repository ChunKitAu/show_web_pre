function login() {
	
	//表单的数据用ajax发送 避免页面跳转
	$.ajax({
		url: "http://10.0.57.28:8080/login",
		dataType: "json",
		type: "POST",
		data: $("#loginForm").serialize(),
		crossDomain: true,
		xhrFields: {
			withCredentials: true, // 这里设置了withCredentials
		},
		success: function(result,xhr) {
			console.log(result);
			if (result.code == 200) {
				window.location.href = "crud_list.html";
			}
			if (result.code == 1000) {
				alert(result.data);
			}
		},
		error: function() {
			alert("异常！");
		},
	})
};
