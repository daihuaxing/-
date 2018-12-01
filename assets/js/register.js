
(function () {
    var html = document.documentElement;

    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width / 16 + 'px';
    }
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();
$("#mobile").on("blur",checkPhone);
function checkPhone(){
    var phone = document.getElementById('mobile').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){
        document.getElementById('mobile').value = "";
        return false;
    }else {

    }
}
$(".mobile_password").on("blur",checkpassword);
function checkpassword() {
    var password = document.getElementsByClassName("mobile_password")[0].value;
    if(!(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,15}$/.test(password))){
        document.getElementsByClassName("mobile_password")[0].value = "";
        return false;
    }
}
$(".mobile_password").on("blur",checkpassword_confirm);
$(".mobile_password_confirm").on("blur",checkpassword_confirm);
function checkpassword_confirm() {
    var password = document.getElementsByClassName("mobile_password")[0].value;
    var password_confirm = document.getElementsByClassName("mobile_password_confirm")[0].value;
    if(password !== password_confirm){
        document.getElementsByClassName("mobile_password_confirm")[0].value = "";
        return false;
    }
}

$("#register").on("click",function () {
    if($("#UserAgree").is(":checked") && $("#agreeNews").is(":checked")&&
        document.getElementById('mobile').value && document.getElementsByClassName("mobile_password")[0].value
        &&document.getElementsByClassName("mobile_password_confirm")[0].value ) {
        $(".box").removeClass("disabledbutton");
    }else{
        $(".box").addClass("disabledbutton");
    }
});
$("#LangNextStep").on("click",function(e){
    e.preventDefault();
    $.ajax({
        type:"GET",
        url:"http://10.9.42.223:3008",
        data:$("form").serialize()+"&way=1",
        success:function (res,status,xhr) {
            console.log(res);
            if(res === "error"){
                alert("该手机号已注册");
            }else{
                window.location.href = res;
            }
        },
        error:function (data) {
            console.log(data);
        }
    })
})


