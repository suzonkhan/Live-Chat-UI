jQuery (document).ready(function() {
    // Function to check if element is in viewport
    jQuery(".floating-chat-button").on('click', function () {
        $(".floating-chat-wrapper").toggleClass("active-floating-contact")
    })
    jQuery(".close-floating-contact").on('click', function () {
        $(".floating-chat-wrapper").removeClass("active-floating-contact")
    })
});
