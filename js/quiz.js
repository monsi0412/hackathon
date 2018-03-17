/*global $*/
$(document).ready(function() {
    let counter = 0;
    let name;
    let teacher;
    let period;
    let friend;
    let input;
    let question = document.querySelector('#QUESTION');
    let sentences = document.querySelector('#sentences');
    let text;

    $('#transition').hide(0);
    $('#sentences').hide(0);
    $('#page').hide(0);

    FADER(); //This makes page fade in.

    function FADER() {
        $('.FADE').hide(0).delay(500).fadeIn(500);
        console.log('done');
    }

    function varLogic() {  //Counter variable, knows when to set name, teacher, period, and friend variables. 
        console.log(counter);
        if (counter == 0) {
            name = input;
            counter++;
            $('.FADE').fadeOut(500, function() {
                question.innerHTML = ("<h1 class='questions'>Who is your favorite teacher?</h1>")
                $('input').val("")
            });
            
            $('.FADE').fadeIn(500);
        }
        else if (counter == 1) {
            teacher = input;
            counter++;
            $('.FADE').fadeOut(500, function() {
                question.innerHTML = ("<h1 class='questions'>What period do you have this teacher?</h1>")
                $('input').val("");
            });

            $('.FADE').fadeIn(500);
        }
        else if (counter == 2) {
            period = input;
            counter++;
            $('.FADE').fadeOut(500, function() {
                question.innerHTML = ("<h1 class='questions'>Who is your best friend?</h1>")
                $('input').val("");
            });

            $('.FADE').fadeIn(500);
        }
        else if (counter == 3) {
            friend = input;
            counter++;
            $('.FADE').fadeOut(500);
            $('#transition').fadeIn(2000);
            $('#transition').fadeOut(500, function() {
                text = "You’re in your " + period + " period class with " + friend + " . 'Late again, " + name + "?' " + teacher + " says as they start to hand out papers for the class.<br> Five minutes into the period, the fire alarm suddenly goes off and a wave of silence settles over the class. While your classmates start shuffling outside, you all hear loud bangs. Gun shots. <br> In the hall, you are met with administrators and students who are panicking, telling you to go back into the classroom. <br> You all rush in, hiding under the desks. You see " + friend + " a couple desks away. " + teacher + " locks and barricades the door once everyone is inside. <br> Silently people start pulling out their phones to contact their family in any way. You hear " + friend + " try their best to cry quietly. <br> You need to stay calm until it’s all over."
                Scene();
            });
        }
    }
    $('button').click(function() {
        input = $('input').val()
        varLogic();
    });
    
    $('#page').click(function() {
        window.location.href = "survey.html"
    });

    $('#holder').keyup(function(event) {
        if (event.keyCode === 13) {
            $('#submit').click();
        }
    });

    function Scene() { //Makes it so that text shows on page, using variables. 
        sentences.insertAdjacentHTML('beforeend', "<h3 id='quizText'>" + text + "</h3>");
        $('#holder').hide(0);
        $('#sentences').fadeIn(500);
        $('#page').fadeIn(500);
    }
});
