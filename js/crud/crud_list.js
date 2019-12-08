// var host = "http://127.0.0.1:8080";
var host = "http://10.0.57.28:8080";
$(function () {
    toPage(1);
});


function toPage(pn) {
    var totalRecord, currentPage;
	
    $.ajax({
        url: host+"/article/list?pn=" + pn,
        type: "GET",
		dataType:'json',
		crossDomain: true,
		xhrFields: {
			withCredentials: true, // 这里设置了withCredentials
		},
        success: function (result) {
			// console.log(result);
			
			if(result.code == 401){
				// console.log(result);
				window.location.href = "login.html";
			}
			if(result.code == 1000){
			    alert(result.data);
			}
			if(result.code == 200){
				// console.log(result);
				// 1.解析并显示表格数据
				build_seeker_table(result);
				// //2.解析并显示分页信息
				build_page_info(result);
				// //3.解析显示分页条信息
				build_page_nav(result);
			}

        },
        error: function (xhr) {
            alert("error..");
        }
    })
}


function build_seeker_table(result) {
    $("#tbl_article tbody").empty();


    var articles = result.data.list;

    $.each(articles, function (index, item) {
        var indexTd = $("<td></td>").append(index + 1);
        var idTd = $("<td></td>").append(item.id);
        var titleTd = $("<td></td>").append(item.title);
        var readtimesTd = $("<td></td>").append(item.readtimes);
        var authorTd = $("<td></td>").append(item.author);
        var reblogTd = $("<td></td>").append(item.reblog);
        var timeTd = $("<td></td>").append(item.time);
        var typeTd = $("<td></td>").append(item.type);

        var editBtn = $("<button></button>").addClass("btn btn-primary btn-sm edit_btn")
            .append("编辑");
        //添加一个自定义属性,用来表示当前要修改的id
        editBtn.attr("edit_id", item.id);
        editBtn.click(function () {
            window.location.href = "crud_write.html?id=" + item.id;
        });
        var editTd = $("<td></td>").append(editBtn);

        var delBtn = $("<button></button>").addClass("btn btn-danger btn-sm ban_btn").append("删除");;

        //添加一个自定义属性,用来表示要禁止的id
        delBtn.attr("ban_id", item.id);

        var banTd = $("<td></td>").append(delBtn);
        //添加一个自定义属性,用来表示要删除的id
        delBtn.attr("ban-id", item.id);

        delBtn.click(function () {

            if(confirm("确定要删除 :"+item.title)+"  吗?"){
                $.ajax({
                    url:'http://10.0.57.28:8080/article/'+$(this).attr('ban_id'),
                    type:'DELETE',
					xhrFields: {
						withCredentials: true, // 这里设置了withCredentials
					},
                    success:function (result) {
                        alert("删除成功");
                        toPage(currentPage);
                    },
                    error:function () {
                        alert("删除失败");
                    },
                })
            }
        })

        var delTd = $("<td></td>").append(delBtn);
        $("<tr></tr>").append(indexTd)
            .append(idTd)
            .append(titleTd)
            .append(timeTd)
            .append(reblogTd)
            .append(authorTd)
            .append(typeTd)
            .append(editTd)
            .append(delTd)
            .appendTo("#tbl_article tbody")
    })
}

function getUrlString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
}