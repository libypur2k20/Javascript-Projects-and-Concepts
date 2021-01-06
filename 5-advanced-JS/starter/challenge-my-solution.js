////////////////////////////////////////
// CODING CHALLENGE 7


/*
    --- Let's build a fun quiz game in the console! ---
*/

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all
// your code is private and doesn't interfere with the other programmers code (Hint: we learned a special
// technique to do exactly that). IIFE
(function(){

    /*
         1. Build a function constructor called Question to describe a question. A question should include:
        a) Question itself.
        b) the answers from which the player can choose the correct one (choose an adequate data structure here,
            array, object, etc.)
        c) correct answer (I would use a number for this)
    */

    var Question = function(questionParam, answersParam, solutionParam){
        this.question = questionParam;
        this.answers = answersParam;
        this.solution = solutionParam;
    };

    // 2. Create a couple of questions using the constructor.
    var question1 = new Question('What is the capital city of Spain?',['Madrid','Barcelona','Valencia'],0);
    var question2 = new Question('What of the following fruits is yellow?',['Strawberry','Banana','Orange'],1);
    var question3 = new Question('What meal do you eat in the morning?',['Dinner','Lunch','Breakfast'],2);

    // 3. Store them all inside an array.
    var questionsArray = [question1, question2, question3];

    // 4. Select one random question and log it on the console, together with the possible answers (each
    // question should have a number) (Hint: write a method for the Question objects for this task).
    Question.prototype.logQuestion = function(questions){
        var randomIndex = Math.floor(Math.random() * questions.length);
        var randomQuestion = questions[randomIndex];
        console.log(randomQuestion.question);
        for(var i = 0; i < randomQuestion.answers.length; i++){
            console.log(i + ': ' + randomQuestion.answers[i]);
        }

        // 5. Use the 'prompt' function to ask the user for the correct answer. The user should input
        // the number of the correct answer such as you displayed it on Task 4.
        var userAnswer = prompt('Please, select the correct answer (just type the number).');
        return [randomQuestion,userAnswer];
    }

    Question.prototype.checkAnswer = function(question,answerIndex){

        /*
          --- Expert level ---
        9. Be careful: after Task8, the game literally never ends. So include the option to quit the game if the
        user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
        */

        var exitGame = false;
        if(answerIndex !== null)    //The user cancelled the prompt dialog.
        {
            var result = false;
            exitGame = (answerIndex === 'exit');
            if(exitGame === false)
            {
                var answer = Number.parseInt(answerIndex);
                if (isNaN(answer) === false)
                {
                    if (answer >= 0 && answer <= question.answers.length - 1)
                    {
                        if(answer === question.solution)
                        {
                            this.score += 1;
                            result = true;
                        }
                    }
                }

                console.log((result ? 'Correct' : 'Incorrect') + ' answer!');
            }
        }
        else
        {
            exitGame = true;
        }

        return exitGame;

    }

    /*
    --- Expert level ---

    8. After you display the result, display the next random question, so that the game never ends (Hint: 
        write a function for this and call it right after displaying the result)
    */
    Question.prototype.startGame = function(questions){
            do{
                var result = this.logQuestion(questionsArray);
                var quitGame = this.checkAnswer(result[0], result[1]);
                if(quitGame === false)
                {
                    this.displayScore();
                }
            } while(quitGame === false);
    }

    /*
        10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to
            the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this
            with the tools you feel more comfortable at this point).
    */

    Question.prototype.score = 0;

    /*
    11. Display the score in the console. Use yet another method for this.
    */
    Question.prototype.displayScore = function(){
        console.log('Your current score is: ' + this.score);
        console.log('--------------------------------------------');
    }

    Question.prototype.startGame(questionsArray);

})();



