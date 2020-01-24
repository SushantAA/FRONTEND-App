
// when clicked on list items
$("ul").on("click","li",function()
{
    $(this).toggleClass("li_click");
});

// when clicked delete button 
$("ul").on("click","span",function(event){
    event.stopPropagation();
$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
});

// to create new li
$("input").keypress(function(event)
{
    if(event.which===13)
    {
        var newTodo = $(this).val();
        $("ul").append('<li><span><i class="fas fa-minus-circle"></i></span> ' + newTodo + '</li>');
        $(this).val("");
    }
});

$(".fa-edit").on("click",function()
{
    $("input").fadeToggle();
});