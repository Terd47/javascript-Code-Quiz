(function()
 {
  let codeQuestions = [{
    question: "commonly used data types Do Not include?",
    options: ["Strings","Booleans","Alerts","Numbers"],
    answer: 2
  }, {
    question: "The condition in an if/else statement is enclosed within__________?",
    options: ["quotes","curly brackets", "parenthesis","square brackets"],
    answer: 2
  }, {
    question: "Arrays in JavaScript can be used to store _________?",
    options: ["numbers and strings","other arrays","booleans","all of the above"],
    answer: 3
  },{
    question: "String values must be enclosed within _________ when being\
                when being assigned to variables?",
    options: [ "comments","curly brackets","quotes","parenthesis"],
    answer: 2
  }, {
    question: "A very useful tool used to during development and debugging for printing\
               for printing content to the debugger is:?",
    options: ["JavaScript","terminal/bash","for loops","console.log"],
    answer: 3
  },];
  
  let quesCounter = 0;
  let selectOptions = [];
  let quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function() 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please choose an answer !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h1>Question No. ' + (index + 1) + ' :</h1>');
        element.append(header);

        var question = $('<h2></>').append(codeQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < codeQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += codeQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < codeQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
    // timer count down
    let time =100
   // setInterval(function(){ time--;  console.log("This is our time varibale ", time) }, 1000);
    //document.getElementById('quizTimer').innerHTML = time;
    
    var correct = 0;

    
   
  
  function finalScore(correct){
    const scoreTemplate = `<div id=“scorePage”> 
                             <div id="scores"><p><h2> 
                             You scored ${correct } out of ${codeQuestions.length}</h2></p>
                             
                             </div>
                             <div id=“userInput”>
                             <input type="text" id="userInitials">
                             <button type="submit" id="saveInitials" >Submit</button>
                             </di>
                             <div id=“scoreBoard”>
                               <ul id=“scoreList”></ul>
                              </div>
                            </div>`;
    const scoreLi = $('<li>');
    document.getElementById('scoreBoardContainer').innerHTML = scoreTemplate;
    
    
   $('#saveInitials').on('click', function(event){
    event.preventDefault();
    var getInitial = $('#userInitials').val();
    console.log(getInitial);
    if(getInitial !== ""){
      saveScore(getInitial,correct);
      console.log("insideEventListener");
      displayResult();
    }
   });
  }

  function saveScore(name,score){
    console.log(name + " " + score);
    //get localStorage
    let localStorage = window.localStorage;
  
    if(localStorage.getItem("score") != null){
        let tempObject = JSON.parse(localStorage.getItem("score"));
        tempObject.push({name, score});
        localStorage.setItem("score",JSON.stringify(tempObject));
    } else {
        let tempObject = [{name, score}];
        localStorage.setItem("score", JSON.stringify(tempObject));
    }
    displayScoreBoard();
  }
 
  function displayScoreBoard(){
    let localStorage = window.localStorage;
    
    if(localStorage.getItem("score") != null){
        let tempObject = JSON.parse(localStorage.getItem("score"));
         //$('<li>')}
         console.log(tempObject);
         var li = "";
         for (var i = 0; i < tempObject.length; i++)
         {
          var newTmp = `<li><span>${tempObject[i].name}</span><span>${tempObject[i].score}</span></li>`;
          li += newTmp;
         }
         document.getElementById('scoreList').innerHTML = li;
  }}
  
 
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === codeQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +codeQuestions.length);
       finalScore(correct);
       displayScoreBoard();
        return score;
  }
  
})();