/**
 * Created by haziz on 12/17/15.
 */
var username;
function inputName(){
    username = prompt("Enter your name");
    var letter1 = username.slice(0, 1);
    letter1 = letter1.toUpperCase();
    var remletter = username.slice(1);
    remletter = remletter.toLocaleLowerCase();
    username = letter1 + remletter;
}
    var score = 0;
    var scoreInFuntion;
    var questions = ["3 + 5 = ?", "2 * 5 = ?", "4 / 4 = ?", "4 - 2 = ?", "3 * 4 = ?", "5 + 3 = ?", "3 * 3 = ?"];
    var ans = [3 + 5, 2 * 5, 4 / 4, 4 - 2, 3 * 4, 5 + 3, 3 * 3];
    var anss = [];
    var correctAns = [];
    function scoring() {
        for (var i = 0; i < questions.length; i++) {
            anss.push(prompt(questions[i]));

            if (anss[i] == ans[i]) {
                correctAns.push("Correct");
                scoreInFuntion = 100 / questions.length;
                score = score + scoreInFuntion;
            }
            else{
                correctAns.push("Wrong");
            }
        }
    }