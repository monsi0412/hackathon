$(document).ready(function() {
    let counter = 0;
    let name;
    let teacher;
    let period;
    let friend;
    let input;
    let question = document.querySelector('#QUESTION');
    
    $('#transition').hide(0);
    
    FADER();
    
     function FADER(){
        $('.FADE').hide(0).delay(2000).fadeIn(2000);
        console.log('done');
     }
     
     function varLogic(){
         console.log(counter);
         if (counter==0){
             name = input;
             counter ++;
             $('.FADE').fadeOut(2000,function(){
                 question.innerHTML=("<h1>Who is your favorite teacher</h1>")
                 $('input').val("");
                 
             });
             
             $('.FADE').fadeIn(2000);
         }
         else if (counter ==1){
             teacher = input;
             counter ++;
             $('.FADE').fadeOut(2000,function(){
                 question.innerHTML=("<h1>What period do you have this teacher?</h1>")
                 $('input').val("");
             });
             
             $('.FADE').fadeIn(2000);
         }
         else if (counter ==2){
             period = input;
             counter ++;
             $('.FADE').fadeOut(2000,function(){
                 question.innerHTML=("<h1>Who is your best friend?</h1>")
                 $('input').val("");
             });
             
             $('.FADE').fadeIn(2000);
         }
         else if (counter ==3){
             friend = input;   
             counter ++;
             $('.FADE').fadeOut(2000);
             $('#transition').fadeIn(2000);
         }
     }
     
    
    $('button').click(function(){
       input = $('input').val() 
       varLogic();
    });
        
        
        
        
        
    });
 
    
    


