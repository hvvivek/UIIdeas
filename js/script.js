console.log($("#option-1"))
var timer;
var timer2;
$(".themes").on("mouseover", function(){
    if(timer)
    {
        clearTimeout(timer)
    }
    $(".option").css("display","none")
    $("#" + $(this).data().target).css("display","block")
    timer = setTimeout(function(){$(".option").css("display","none")}, 3000)
})

$(".option>li").on("click", function(){
    if(timer)
    {
        clearTimeout(timer)
    }
    if(timer2)
    {
        clearTimeout(timer2)
    }
    $("#project-1").css("display","block")
    console.log($("#project-1>h2")[0])
    $("#project-1>h2")[0].innerHTML = this.innerHTML;
    timer2 = setTimeout(function(){$("#project-1").css("display","none")}, 5000)
})

$(".project").on("mouseover", function(){
    
    if(timer2)
    {
        clearTimeout(timer2)
    }
    
})

$(".project").on("mouseout", function(){
    timer = setTimeout(function(){$(".option").css("display","none")}, 5000)
    timer2 = setTimeout(function(){$("#project-1").css("display","none")}, 3000)

})
