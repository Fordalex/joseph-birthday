// settings

function restart() {

    setTimeout(function() {
        location.reload();
    }, 1500)
}

$(document).on('click', '.wrong-button', function() {
    $('#puzzle-container').html('');
    $('#puzzle-container').append(`
        <p>Close... Try again.</p>
    `);
    restart();
});

var welcomeMessage = sessionStorage.getItem('welcomeMessageRead');
var usersAttempts = sessionStorage.getItem('attempts');

if (welcomeMessage != 'read') {
    $('#puzzle-container').append(`
    <div id="welcome-message">
        <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" id="welcome-close" />
        <p>Forget about the past, you can't change it. <br>Forget about the future, you can't predict it. <br> Forget about the present, I didn't get you one.<br><br>Welcome to your birthday puzzle!</p>
    </div>
    `)
}

$(document).on('click', '#welcome-close', function() {
    $('#welcome-message').remove();
    sessionStorage.setItem('welcomeMessageRead', 'read');
})

// first

var firstButton = 40;

$('#first-button').on('click', function() {
    firstButton--;
    if (firstButton == 29) {
        $('#first-button').css('background-color', 'red');
        $('#first-button').css('color', 'navy');
    } else if (firstButton == 22) {
        $('#first-button').css('background-color', 'blue');
        $('#first-button').css('color', 'red');
    } else if (firstButton == 32) {
        $('#first-button').css('background-color', 'green');
        $('#first-button').css('color', 'orange');
    } else if (firstButton == 8) {
        $('#first-button').remove();
        $('#puzzle-container').append('<p id="boo">Boo!</p>');
        removeBoo();
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
function removeBoo() {
    setTimeout(function() {
        $('#boo').remove();
        startSecondPuzzle();
    }, 1000)

};

function startSecondPuzzle() {
    $('#puzzle-container').append(`
        <div id="second-puzzle-container">
            <p id="second-puzzle-question">What was the colour of the number 29</p>
            <div>
                <button class="wrong-button" id="lapis" onclick="secondButtonPressed()">Lapis</button>
                <button class="wrong-button" id="blue" onclick="secondButtonPressed()">Blue</button>
                <button id="navy" onclick="secondButtonPressed()">Navy</button>
                <button class="wrong-button" id="slate" onclick="secondButtonPressed()">Slate</button>
                <button class="wrong-button" id="green" onclick="secondButtonPressed()">Green</button>
                <button class="wrong-button" id="azure" onclick="secondButtonPressed()">Azure</button>
                <button class="wrong-button" id="arctic" onclick="secondButtonPressed()">Arctic</button>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button id="fuck-knows" onclick="secondButtonPressed()">Fuck Knows</button>
            </div>
        </div>
    `);
};

function secondButtonPressed() {
    $('#second-puzzle-container').remove();
}

$(document).on('click', '#fuck-knows', function() {
    $('#puzzle-container').append(`
        <p>Thats not the attitude... Try again.</p>
    `);
    restart();
});

$(document).on('click', '#navy', function() {
    $('#puzzle-container').append(`
        <p id="well-done">Your Smarter Than you look.</p>
    `);
    setTimeout(function() {
        $('#well-done').remove();
        startThirdPuzzle();
    }, 2500)
})

// Third puzzle
function startThirdPuzzle() {
    $('#puzzle-container').append(`
        <div>
            <div>
                <p>Change the background colour to view the instructions, select the correct button to continue.</p>
                <ol id="instructions-list">
                    <li>${colorLetters("Your number isn't 122 but it's half that")}</li>
                    <li>${colorLetters("Add 9 to your number")}</li>
                    <li>${colorLetters("Divide your number by the yellow number in the grid")}</li>
                    <li>${colorLetters("Times your number by the red number in the grid")}</li>
                    <li>${colorLetters("Add 5 to your number then press the number 72")}</li>
                </ol>
            </div>
            <hr>
            <h6 class="text-center">Change Background Colour</h6>
            <div class="d-flex justify-content-center mb-3">
                <button onclick="changeInstructionsBackground('red')">Red</button>
                <button onclick="changeInstructionsBackground('blue')" class="mx-3">Blue</button>
                <button onclick="changeInstructionsBackground('green')">Green</button>
            </div>
            <hr>
            <div id="number-button-container">

            </div>
        </div>
    `);
    for (let i = 1; i < 101; i++) {
        if (i == 7) {
            $('#number-button-container').append(`<button class="bg-warning wrong-button number-button">${i}</button>`);
        } else if (i == 4) {
            $('#number-button-container').append(`<button class="bg-danger wrong-button number-button">${i}</button>`);
        } else if (i == 88) {
            $('#number-button-container').append(`<button class="bg-success wrong-button number-button">${i}</button>`);
        } else if (i == 29) {
            $('#number-button-container').append(`<button class="bg-info wrong-button number-button">${i}</button>`);
        } else if (i == 72) {
            $('#number-button-container').append(`<button class="number-button" onclick="startLastPuzzle()">${i}</button>`);
        } else {
            $('#number-button-container').append(`<button class="number-button wrong-button">${i}</button>`);
        }

    }
};

function colorLetters(word) {
    var wordArray = word.split('');
    var newArray = [];

    for (let i = 0; i < wordArray.length; i++) {
        let randomNumber = Math.floor(Math.random() * 3);
        let colouredLetter = wordArray[i];

        if (randomNumber == 0) {
            colouredLetter = '<span class="red">'.concat(colouredLetter, '</span>');
        } else if (randomNumber == 1) {
            colouredLetter = '<span class="blue">'.concat(colouredLetter, '</span>');
        } else if (randomNumber == 2) {
            colouredLetter = '<span class="green">'.concat(colouredLetter, '</span>');
        }
        newArray.push(colouredLetter);
    };
    return newArray.join('');
};

function changeInstructionsBackground(colour) {
    $('#instructions-list').css('background-color', colour);
}

var moveableElement;
var moveableStyle;
let move = true;

// The last puzzle
function startLastPuzzle() {
    $('#puzzle-container').html("<p id='temp-message'>Well I hope you enjoyed that as much as I enjoyed coding it...</p>");
    setTimeout(function() {
        $('#temp-message').remove();
        appendLastPuzzle();
    }, 2500);
}

function appendLastPuzzle() {
    $('#puzzle-container').html(`
        <a href="birthdayMessage.html">
            <img src="https://img.icons8.com/cotton/64/000000/secured-letter.png" id="letter-icon" onclick="finsihedPuzzle"/>
        </a>
        <div id="moveable">
            <p>Find the Mising Letter.</p>
        </div>
        <div>
            <button class="miss-button">H</button>
            <button class="miss-button">A</button>
            <button class="miss-button">P</button>
            <button class="miss-button">P</button>
            <button class="miss-button">Y</button>
            <button class="miss-button">S</button>
            <button class="miss-button">B</button>
            <button class="miss-button">I</button>
            <button class="miss-button">R</button>
            <button class="miss-button">T</button>
            <button class="miss-button">H</button>
            <button class="miss-button">D</button>
            <button class="miss-button">A</button>
            <button class="miss-button">Y</button>
        </div>
    `);

    moveableElement = document.getElementById('moveable');
    moveableStyle = getComputedStyle(moveableElement);

    moveableElement.addEventListener('touchstart', function() {
        move = true;
    });
}

window.addEventListener('touchmove', function(e) {
    if (move) {
        var mouseLeft = e.touches[0].clientX;
        var mouseTop = e.touches[0].clientY;
        var elementWidth = moveableStyle.width.slice(0, -2) / 2;
        var elementHeight = moveableStyle.height.slice(0, -2) / 2;
        var newLeftPosition = mouseLeft - elementWidth;
        var newTopPosition = mouseTop - elementHeight;

        moveableElement.style.left = newLeftPosition.toString().concat('px');
        moveableElement.style.top = newTopPosition.toString().concat('px');

        console.log(mouseLeft);
        console.log(mouseLeft);
        console.log(e);
    }
});

window.addEventListener('touchend', function() {
    move = false;
});