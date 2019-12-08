$(function () {
    getDemoList();//加载项目案例/成果 列表
    getLearningList();//加载学术动态列表
})





function getDemoList() {
	
    $.ajax({
        url: "http://10.0.57.28:8080/article/listByType",
		dataType: "json",
		type: "get",
        data:{type:"学术动态"},
        success: function (result) {
            if (result.code == 200) {
				console.log(result);
                //数据回显
                var contents = result.data.list;
                $("#new1").empty();
                $("#new1").append("<ul></ul>");
                $.each(contents,function (index,item) {
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.innerText = item.title;
                    a.href="index_article.html?id="+item.id+"&type=学术动态";
                    var span = document.createElement('span');
                    span.innerText = item.time.substring(2,10);

                    li.appendChild(a);
                    li.appendChild(span);
                    $("#new1 ul").append(li);
                })

            }
        },
		error:function (data) {
			
			console.log("学术动态加载失败"+data);
		},
    })
}

function getLearningList() {
    $.ajax({
		url: "http://10.0.57.28:8080/article/listByType",
		dataType: "json",
		type: "get",
        data:{type:"项目案例/成果"},
        success: function (result) {
            $("#learning").empty();
            if (result.code == 200) {
                //数据回显
                var contents = result.data.list;

                $("#new2").empty();
                $("#new2").append("<ul></ul>");
                $.each(contents,function (index,item) {
                    var li = document.createElement('li');

                    var a = document.createElement('a');
                    a.innerText = item.title;
                    a.href="index_article.html?id="+item.id+"&type=项目案例/成果";
                    var span = document.createElement('span');
                    span.innerText = item.time.substring(2,10);

                    li.appendChild(a);
                    li.appendChild(span);
                    $("#new2 ul").append(li);
                })
            }
        },
		error:function () {
		    console.log("项目案例/成果加载失败");
		},
    })
}



