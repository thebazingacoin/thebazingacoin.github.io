$(".clipboard_copy").on("click", function() {
    copyClip($("#contract_address").get());
});

function copyClip(element) {
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($(element).text()).select();
    document.execCommand("copy");
    $(".copied_message").css({"display": "flex"});
    $(".copied_message").delay(1000).fadeOut();
    temp.remove();
}
