var answers = ["D", "C", "A", "C", "C"]
    tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (var y = 0; y < radios.length; y++) {
        if (radios[y].checked) return radios[y].value; // return the checked value
    }
}
//
// function getScore() {
//     var score = 0;
//     // debugger
//     for (var i = 0; i < tot; i++)
//         if (getCheckedValue("q" + i) === answers[i]) score += 1; // increment only
//     return score;
// }
// // alternate between views, either showing the formor results
// $(document).ready(function() {
//     $('form').show()
//     $('.result').hide()
//     $('form').submit(function(event) {
//         event.preventDefault();
//         $('form').hide();
//         $('.result').show()
//         returnScore();
//     })
// })
// function returnScore() {
//     // alert("Your score is " + getScore() + "/" + tot);
//     document.getElementById('marks').innerHTML = "Your score is " + "<br>" + (getScore()/tot)*100 + "%";
// }
