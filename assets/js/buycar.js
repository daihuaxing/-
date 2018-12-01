$(document).ready(function(){
    var earphone,Classic,Intelligence;
    $.ajax({
        url: "../tsconfig.json",//json文件位置
        type: "POST",//请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) {//请求成功完成后要执行的方法
            earphone= data.earphone;
            Classic = data.Classic;
            Intelligence = data.Intelligence;
        }
    });
    $(".li1,.li2,.li3").on("mouseenter",choose);
    function choose() {
        if($(this).attr("class")==="li1"){
            createShow(Intelligence);//img/bn.jpg
        }
        if($(this).attr("class")==="li2"){
            createShow(Classic);
        }
        if($(this).attr("class")==="li3"){
            createShow(earphone);
        }
    }
    function createShow(arr) {
        var arrlist = arr.slice(0,5);
        $(".navLine , .removeA ").remove();
        for(var i = 0,len = arrlist.length; i < len; i++){
            var a = $("<a></a>").attr("href","http://localhost:63342/dhx/assets/buycar.html?id="+ arr[i].id).addClass("removeA").insertBefore(".nacMore");
            var navPhone =$("<div></div>").attr("id",arr[i].id).addClass("navPhone").appendTo(a);
            $("<div></div>").addClass("navLine").insertBefore(".nacMore");
            $("<img>").attr("src",arr[i].img).addClass("navImg").appendTo(navPhone);
            $("<p></p>").text(arr[i].name).addClass("navP1").appendTo(navPhone);
            $("<p></p>").text("￥" + arr[i].newPrice + "起").addClass("navP2").appendTo(navPhone);
        }
    }
});

