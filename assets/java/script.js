//!!!need a start button to start game with instructions
document.getElementById("start").addEventListener("click", setTime);
// document.getElementById("start").Survey;

//!!!need a timer to countdown from 75, that ends game when done
//query selector for javas to do css functions lesson #5
//lesson #7 to change html look over and over
//timers-intervals lesson #9 and #10 video 2/6
var timerSeconds = 75;
var quizEl = document.getElementById("card");
var timeEl = document.getElementById("timer");
var newQuizEl = document.getElementById("questions");



function setTime() {
    var timerInterval = setInterval(function() {
      timerSeconds--;
      timeEl.textContent = "Timer:" + timerSeconds;;
  
      if(timerSeconds === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);//!!!!!! this will stop the timer
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
    
}



// function sendMessage() {
//     quizEl.textContent = "";
//     // document.appendChild(Survey);
  
//   }


function Survey () {
  
    
var json = {
    title: "API Quiz",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: false,
    pages: [
       
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "CSS",
                    title: "What is the main function of this language?",
                    choices: ["style properties", "structure web page", "add buttons", "search web pages"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "HTML",
                    title: "What is the main function of this language?'",
                    choices: ["style properties", "structure web page", "add buttons", "search web pages"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "<button>",
                    title: "What is the function of this element?",
                    choices: ["style properties", "structure web page", "add buttons", "search web pages"]
                }
            ]
        }
    ],
    completedHtml: "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>"
};
}

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#quizResult')
            // .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
            console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
    });

$(quizEl).Survey({model: survey});




// !!!need to rotate through 5-8 questions, multiple choice, end game when all answered ?for loop?
// 04 Web API's lesson #3 lists and children
// event listeners lesson #11 and #12
// lesson #13 prevent default beginning of forms sections
// lesson #14 answers for forms with immediate display
// lesson #17 event bubbling
// lesson #19 event.target will define click event once and can get down to answers
// lesson #26 how to add button to list item

//!!!create elements for the html

//!!!need to have all done screen giving score and input for user name

//!!!need to track highscores in the local file, need to be able to clear highscore with button
//lesson #21 local storage.
//lesson #23 JSON to store multiple data sets for an item.  stringify to Save, parse it to use it 

//!!!need to have access to the highscores for record keeping
//lesson #23 JSON to store and string together data trim() takes out whitespace between items

// !!!need reset button to start over screen at the end

