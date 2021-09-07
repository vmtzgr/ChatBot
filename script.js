function test(){
    alert('123456');


}


$("form[name^='test']").on("submit", function(event){
    event.preventDefault(); 
    var message = $('input[name^="message"]').val(); 
    var messages = $('div.message');

    var messageHistory = [];

    messages.each(function(index) {
        messageHistory.push($.trim($(this).text()));
    });

    alert(messageHistory);

    $.ajax({
        method: "POST",
        url: "",
        data: {
            message: message,
            messageHistory: messageHistory
        }
    })

});
