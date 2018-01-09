$.get("xxxx.html",{ "_": $.now() },function(resp){
    $("div#result").html(resp);
});