<?php
//myform data
$player_name = filter_var ($_POST[player_name], FILTER_SANITIZE_STRING);
$player_score = (int) $_POST[player_score];

// PHP Associative Array
$player_array = array("name"=>$player_name, "score"=> $player_score);

//read scores.JSON and stick it in associative array
$highscoresJSON = file_get_contents("scores.json");
$highscore_array = json_decode($highscoresJSON, true);

//declare variables
$key = 0;
$highscores = array();

//if the player's score is greater than the lowest high score
if($player_score > $highscore_array[9][score]) {
    //loop through highscore list array
    foreach($highscore_array as $k => $value) {
        //current high score in loop
        $score = $value[score];
        // If the highscore is higher than the player's score
        if($score >= $player_score) {
            $highscores[$k] = $value;
        }
        //The player has beat this score
        if($score < $player_score) {
            $key = $k; //current value index
            //add the player at this spot on the high score list
            $highscores[$k] = $player_array;
            for($i = $key; $i<9; $i++){
                $highscores[$i + 1] = $highscore_array[$i];
            }
            break; //end the loop here
        }
    }
    $jsonscores = json_encode($highscores);
    file_put_contents("scores.json", $jsonscores);
    var_dump("Howdy Partner!");
}
//if the player's score is less than or equal to the lowest high score
else{
    var_dump("No high score");
}



