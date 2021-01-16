// first puzzle

var firstButton = 10;

$('#first-button').on('click', function() {
    firstButton--;
    if (firstButton == 29) {
        $('#first-button').css('background-color', 'pink');
        $('#first-button').css('color', 'blue');
    } else if (firstButton == 22) {
        $('#first-button').css('background-color', 'blue');
        $('#first-button').css('color', 'red');
    } else if (firstButton == 32) {
        $('#first-button').css('background-color', 'green');
        $('#first-button').css('color', 'orange');
    } else if (firstButton == 8) {
        $('#first-button').remove();
        startPuzzleTwo();
    } else {
        $('#first-button').css('background-color', 'white');
        $('#first-button').css('color', 'black');
    }
    updateFirstButton();
});

function updateFirstButton() {
    $('#first-button').html(firstButton);
}

updateFirstButton();


// second puzzle
function startPuzzleTwo() {

};