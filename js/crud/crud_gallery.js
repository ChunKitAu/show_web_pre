var totalRecord, currentPage;

// var host = "http://127.0.0.1:8080";
var host = "http://120.25.237.83:8096";

$(function () {
    toPage(1);
});

function toPage(pn) {
    currentPage = pn;
    $.ajax({
        url: host+"/Gallery/list?pn=" + pn,
        type: "GET",
        headers : {'Authorization':token},
        success: function (result) {
			if(result.code == 401){
				window.location.href = "login.html";
			}
			if(result.code == 200){
				 initGallery(result)
			
			}
        },
        error: function () {
            alert("error..");
        }
    })
};

function initGallery(result) {
    $("#div0").empty();
    var gallerys = result.data.list;

    //动态生成图片样式
    $.each(gallerys, function (index, item) {

        var div1 = $("<div></div>").addClass("col-sm-6 col-md-4");

        var div2 = $("<div></div>").addClass("thumbnail");

        var aa = $("<a></a>").addClass("lightbox").attr("href",item.img);

        var img = $("<img></img>").addClass('img').attr("src",item.img);


        aa.append(img);

        var div3 = $("<div></div>").addClass("caption");

        var btn = $("<button></button>");
        if(item.isSelect == 0){
            btn.addClass("btn btn-primary ").append("选取");
        }else{
            btn.addClass("btn btn-danger ").append("取消选取");
        }

        //添加点击事件
        btn.click(function () {
            $.ajax({
                url:host+"/Gallery/updateById",
                type:"PUT",
                headers : {'Authorization':token},
                data:{
                    id:item.id,
                    select:item.isSelect==0?1:0,
                },
                success:function (result) {
                    if(result.code == 200){
                        alert("操作成功");
                        toPage(currentPage);
                    }
                },
                error:function () {
                    alert("error");
                },
            })

        });

        div3.append(btn);


        var delBtn = $("<button></button>");
        delBtn.addClass("btn btn-danger ").append("删除图片");
        delBtn.attr("display","inline");
        delBtn.click(function () {
            if(confirm("是否删除")){
                $.ajax({
                    url:host+"/Gallery/"+item.id,
                    type:"DELETE",
                    headers : {'Authorization':token},
                    success:function (result) {
                        if(result.code == 200){
                            alert("删除成功");
                            toPage(currentPage);
                        }
                    },
                    error:function () {
                        alert("error");
                    },
                })
            }
        });

        div3.append(delBtn);


        div2.append(aa).append(div3);

        div1.append(div2);

        div1.appendTo("#div0");
    });

    //画廊插件baguetteBox
    baguetteBox.run('.tz-gallery');

    //分页
    build_page_info(result);
    build_page_nav(result);
}



function uploadGallery() {
    //表单的数据用ajax发送 避免页面跳转
    var fromData = new FormData($('#uploadForm')[0]);
    $.ajax({
        url:host+"/uploadGallery",
        dataType:"json",
        type:"POST",
        headers : {'Authorization':token},
        data:fromData,
        contentType: false,
        processData: false,
        success:function (result) {
            if(result.code == 200){
                alert("上传成功！");
            }
            if(result.code == 1000){
                alert(result.message);
            }
        },
        error:function () {
            alert("异常！");
        },
    })
}