var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    
    $("name").focus();
};

function displayResults() {
    var average = 0;
    var highestScore = 0;

    for (var i = 0; i < scores.length; i++) {
        average += scores[i];

        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
    }
  
    average = average / scores.length;

    $("results").innerHTML = "<h2>Results</h2>" +
                            "<p>Average score is " + average.toFixed(2) + "</p>" +
                            "<p>Highest score is " + highestScore + "</p>";
}

function displayScores() {
	$("scores_table").innerHTML = "<h2>Scores</h2>" ;
							


    var headerRow = document.createElement("tr");
    
    var nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    headerRow.appendChild(nameHeader);
    
    var scoreHeader = document.createElement("th");
    scoreHeader.textContent = "Score";
    headerRow.appendChild(scoreHeader);
    
    $("scores_table").appendChild(headerRow);
  
    for (var i = 0; i < names.length; i++) {
        var row = document.createElement("tr");
        
        var nameCell = document.createElement("td");
        nameCell.textContent = names[i];
        row.appendChild(nameCell);
        
        var scoreCell = document.createElement("td");
        scoreCell.textContent = scores[i];
        row.appendChild(scoreCell);
        
        $("scores_table").appendChild(row);
    }
}

function addScore() {

    var name = $("name").value;
    var score = parseInt($("score").value);
    

    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
    }
    
    names.push(name);
    scores.push(score);

    $("name").value = "";
    $("score").value = "";

    $("name").focus();
}