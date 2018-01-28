$("#slider").slider({
    value: 1,
     min: 1,
     max: 100,
    step: 1,
    slide: function(event, ui) {
        $("#amount").val("$" + ui.value);
        $(ui.handle).text("$" + ui.value);
        $(ui.handle).draggable();
    },

    change: function (event, ui) {       
        if (ui.value < 20) {
            $("#amount-text").text("will let us to add a few new modules");
        }
        else if ((ui.value > 20) && (ui.value < 50)) {
            $("#amount-text").text("can help us improve this product");
        }
        else if ((ui.value > 50) && (ui.value < 80)) {
            $("#amount-text").text("can help us expand this product to other platforms");
        }
        else if ((ui.value > 80) && (ui.value <= 100)) {
            $("#amount-text").text("goes a long way. If you'd like to consider becoming a sponsor, please contact us");
        };
    }

});

$("#amount").val("$" + $("#slider").slider("value") );

$(".button__donate").click(function(){
    $(".hidden").slideDown()
});

(function() {

        window.addEventListener('load', function() {

            var forms = document.getElementsByClassName('needs-validation');

            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('change', function(event) {

                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);

        });

        }, false);

})();

$('.form-control').on('keyup change', function(){
    var show = true;
    
    $(this).children('input').each(function(i){
        if($(this).val().length==0){
            show = false;
        };
});

if(show){
    $('.hidden__card').slideDown();
} else {
    $('.hidden__card').hide();
}
});

