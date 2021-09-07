function test(){
    alert('123456');


}


$("form[name^='test']").on("submit", function(){
 alert('12345');
});
