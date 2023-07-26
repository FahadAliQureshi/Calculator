let num = Math.floor(Math.random() * 100); 

let tries=10;



// function sendVal(){
//     // let button = document.querySelectorAll('.btn');
//     return change;
//     // const input = document.getElementById("input");
//     // return input;
// }


const button = document.querySelector('.btn');
const input = document.getElementById("input");
button.addEventListener('click',(e)=>{
    console.log("",input.value)
    if(num == input.value ){
        console.log("",input.innerHTML)
            if(document.getElementById("demo").innerHTML != '')
            {   
                document.getElementById("demo").innerHTML = '';
            }
            else if(document.getElementById("demo3").innerHTML != '')
            {   
                document.getElementById("demo3").innerHTML = '';
            }
            else if(document.getElementById("demo2").innerHTML != '')
            {   
                document.getElementById("demo2").innerHTML = '';
            }
            document.getElementById("demo").innerHTML = 'Congratulations you guessed it right';
    }


    else if(input.value < num){

            if(document.getElementById("demo").innerHTML != '')
            {   
                document.getElementById("demo").innerHTML = '';
            }
            else if(document.getElementById("demo3").innerHTML != '')
            {   
                document.getElementById("demo3").innerHTML = '';
            }
            else if(document.getElementById("demo2").innerHTML != '')
            {   
                document.getElementById("demo2").innerHTML = '';
            }     
            document.getElementById("demo2").innerHTML = 'Guess is a low number';
    }


    else if(input.value > num){

           if(document.getElementById("demo").innerHTML != '')
            {   
                document.getElementById("demo").innerHTML = '';
            }
            else if(document.getElementById("demo3").innerHTML != '')
            {   
                document.getElementById("demo3").innerHTML = '';
            }
            else if(document.getElementById("demo2").innerHTML != '')
            {   
                document.getElementById("demo2").innerHTML = '';  
            }   
        document.getElementById("demo3").innerHTML = 'Guess is a high number';
    }
    tries--;
    if (tries <= 0) {
    document.getElementById("demo4").innerHTML = 'Oops! You lost the game';
    // button.disabled = 'True';
    document.getElementById("input").disabled = true;
  }

})




    
    













    // function runGame() {

    //     var isPlaying = true;
    //     var num = Math.floor(Math.random() * 10);
    //     var guess;
    //     var tries = 3;
      
    //     alert("You have 3 chances to guess a mindset between 1 and 10!");
      
    //       while (tries >= 0) {
      
    //       guess = prompt("Enter a guess:");
      
    //       if (guess > num) {
    //         alert("Too high!");
    //       }
      
    //       else if (guess < num) {
    //         alert("Too low!");
    //       }  
      
    //       else {
    //         alert("Exactly! " + num + " it is! You've won!");
    //       }
    //       tries--;
    //     }
        
    //     if (tries == 0) {
    //       isPlaying = false;
    //     }
    //   }
      
    //   while (isPlaying = true) {
      
    //     runGame();
      
    //   }