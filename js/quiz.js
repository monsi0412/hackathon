$(document).ready(function() {
    let counter = 0;
    let name;
    let teacher;
    let period;
    let friend;
    let input;
    let question = document.querySelector('#QUESTION');
    let sentences = document.querySelector('#sentences');
    
    $('#transition').hide(0);
    $('#sentences').hide(0);
    
    
    FADER();
    
     function FADER(){
        $('.FADE').hide(0).delay(500).fadeIn(500);
        console.log('done');
     }
     
     function varLogic(){
         console.log(counter);
         if (counter==0){
             name = input;
             counter ++;
             $('.FADE').fadeOut(500,function(){
                 question.innerHTML=("<h1>Who is your favorite teacher</h1>")
                 $('input').val("");
                 
             });
             
             $('.FADE').fadeIn(500);
         }
         else if (counter ==1){
             teacher = input;
             counter ++;
             $('.FADE').fadeOut(500,function(){
                 question.innerHTML=("<h1>What period do you have this teacher?</h1>")
                 $('input').val("");
             });
             
             $('.FADE').fadeIn(500);
         }
         else if (counter ==2){
             period = input;
             counter ++;
             $('.FADE').fadeOut(500,function(){
                 question.innerHTML=("<h1>Who is your best friend?</h1>")
                 $('input').val("");
             });
             
             $('.FADE').fadeIn(500);
         }
         else if (counter ==3){
             friend = input;   
             counter ++;
             $('.FADE').fadeOut(500);
             $('#transition').fadeIn(500);
             $('#transition').fadeOut(500,function(){
                Scene(); 
             });
             Scene();
         }
     }
     
    
    $('button').click(function(){
       input = $('input').val() 
       varLogic();
    });
    
    $('#holder').keyup(function(event){
       if (event.keyCode === 13){
           $('button').click();
       } 
    });
    function Scene (){
        sentences.innerHTML +=("<h1>Hi</h1>")
    sentences.innerHTML +=("<h1>Bye</h1>")
    $('#sentences').fadeIn(500);
        
    }
    
    
    
        
        
        
        
        
    });
 
    
    


