$(function () {
    //获取url参数
    var parameterURL =decodeURI(location.search.substring(1, location.search.length));
    var params = null;

    if(parameterURL != null && parameterURL.length > 0){
        //获取id
        var id =  getUrlParam("id");

        if(id != null){

            //显示位置：
            var t =getUrlParam("type");
			if(t == "项目案例/成果" || t == "学术动态"){
				 $("#localA").append(t).attr("href","index_list.html?type="+t);
			}else{
				$("#localA").append(t).attr("href","index_article.html?type="+t);
			}
			
            initById(id);
        }else{
             var type = decodeURI(getUrlParam("type"));
            $("#localA").append(type).attr("href","index_article.html?type="+type);
            initByType(type);
        }



    }

})

function initById(id){
    $.ajax({
        url: "http://120.25.237.83:8096/article/getById",
        type: "get",
		dataType:'json',
		data:{id:id},
        success: function (result) {
            if (result.code == 200) {
				// console.log(result);
                //数据回显
                $("#table_t1").append(result.data.title);

                $("#table_t2").append("时间:"+result.data.time+"  作者:"+ result.data.author+"  来源："+ result.data.reblog+"  阅读次数："+result.data.readtimes);

                $("#contentDiv").html(result.data.content);
            }
        }
    })
}

function initByType(type){
    $.ajax({
        url: "http://120.25.237.83:8096/article/listByType",
        type: "GET",
        data:{type:type},
        success: function (result) {
            if (result.code == 200) {
                //数据回显
                $("#table_t1").append(result.data.list[0].title);
                $("#table_t2").append("");
                // $("#table_t2").append("时间:"+result.data.list[0].time+"  作者:"+ result.data.list[0].author+"  来源："+ result.data.list[0].reblog+"  阅读次数："+result.data.list[0].readtimes);

                $("#contentDiv").html(result.data.list[0].content);
            }
        }
    })
}
