$(document).ready(function() {

    $('#resource').hide(0); //Learn more link 

    let results = document.querySelectorAll(".result"); //Div result

    function checkChoices(choices) {
        for (let i = 0; i < choices.length; i++) {
            results[i].innerHTML = ("<h1>" + choices[i].value + " of people said this.</h1>");
        }
    }
    
    $('#submit').click(function() {
        var choices = Array.from(document.querySelectorAll('.option')).filter(choice => choice.checked);
        console.log(choices);
        checkChoices(choices);
        $('#submit').hide(0);
        $('#resource').show(0);
    });
    
});