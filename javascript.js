// settings

function restart() {
    if (parseInt(usersAttempts) > 0) {
        sessionStorage.setItem('attempts', parseInt(usersAttempts) + 1);
    } else {
        sessionStorage.setItem('attempts', 1);
    }
    setTimeout(function() {
        location.reload();
    }, 1500)

}

$(document).on('click', '.wrong-button', function() {
    $('#puzzle-container').html('');
    if (usersAttempts < 2) {
        $('#puzzle-container').append(`
            <p class="white-container">No. Trying again.</p>
         `);
    } else if (usersAttempts < 3) {
        $('#puzzle-container').append(`
            <p class="white-container">Try again. Your time being spent well.</p>
         `);
    } else if (usersAttempts < 4) {
        $('#puzzle-container').append(`
            <p class="white-container">Nope, Again, Never give up.</p>
         `);
    } else if (usersAttempts < 8) {
        $('#puzzle-container').append(`
            <p class="white-container">No. Again...<p>
         `);
    } else {
        $('#puzzle-container').append(`
            <p class="white-container">I clearly made this too hard.</p>
         `);
    }

    restart();
});

var welcomeMessage = sessionStorage.getItem('welcomeMessageRead');
if (sessionStorage.getItem('attempts')) {
    var usersAttempts = sessionStorage.getItem('attempts');
} else {
    var usersAttempts = 0;
}

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

var firstButton = 29;

$('#first-button').on('click', function() {
    firstButton -= 0.5;
    if (firstButton == 22) {
        $('#first-button').css('background-color', 'red');
        $('#first-button').css('color', 'navy');
    } else if (firstButton == 12) {
        $('#first-button').css('background-color', 'blue');
        $('#first-button').css('color', 'red');
    } else if (firstButton == 18) {
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
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        $('#puzzle-container').append(`
        <div id="second-puzzle-container">
            <p id="second-puzzle-question" class="white-container">What was the colour of the number 22</p>
            <div>
                <button class="wrong-button" id="lapis" onclick="secondButtonPressed()">Lapis</button>
                <button class="wrong-button" id="blue" onclick="secondButtonPressed()">Blue</button>
                <button id="navy" onclick="firstPuzzleCompleted()">Navy</button>
                <button class="wrong-button" id="slate" onclick="secondButtonPressed()">Slate</button>
                <button class="wrong-button" id="green" onclick="secondButtonPressed()">Orange</button>
                <button class="wrong-button" id="azure" onclick="secondButtonPressed()">Azure</button>
                <button class="wrong-button" id="arctic" onclick="secondButtonPressed()">Arctic</button>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button id="fuck-knows" onclick="secondButtonPressed()">Fuck Knows</button>
            </div>
        </div>
    `);
    } else if (randomNumber == 1) {
        $('#puzzle-container').append(`
        <div id="second-puzzle-container">
            <p id="second-puzzle-question" class="white-container">What was the colour of the number 18</p>
            <div>
                <button class="wrong-button" id="lapis" onclick="secondButtonPressed()">Lapis</button>
                <button class="wrong-button" id="blue" onclick="secondButtonPressed()">Blue</button>
                <button class="wrong-button" id="navy" onclick="secondButtonPressed()">Navy</button>
                <button class="wrong-button" id="slate" onclick="secondButtonPressed()">Slate</button>
                <button id="green" onclick="firstPuzzleCompleted()">Orange</button>
                <button class="wrong-button" id="azure" onclick="secondButtonPressed()">Azure</button>
                <button class="wrong-button" id="arctic" onclick="secondButtonPressed()">Arctic</button>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button id="fuck-knows" onclick="secondButtonPressed()">Fuck Knows</button>
            </div>
        </div>
    `);
    } else if (randomNumber == 2) {
        $('#puzzle-container').append(`
        <div id="second-puzzle-container">
            <p id="second-puzzle-question" class="white-container">What was the background colour of the number 12</p>
            <div>
                <button class="wrong-button" id="lapis" onclick="secondButtonPressed()">Lapis</button>
                <button id="blue" onclick="firstPuzzleCompleted()">Blue</button>
                <button class="wrong-button" id="navy" onclick="secondButtonPressed()">Navy</button>
                <button class="wrong-button" id="slate" onclick="secondButtonPressed()">Slate</button>
                <button class="wrong-button" id="green" onclick="secondButtonPressed()">Orange</button>
                <button class="wrong-button" id="azure" onclick="secondButtonPressed()">Azure</button>
                <button class="wrong-button" id="arctic" onclick="secondButtonPressed()">Arctic</button>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button id="fuck-knows" onclick="secondButtonPressed()">Fuck Knows</button>
            </div>
        </div>
    `);
    }

};

function secondButtonPressed() {
    $('#second-puzzle-container').remove();
}

$(document).on('click', '#fuck-knows', function() {
    $('#puzzle-container').append(`
        <p class="white-container">Thats not the attitude... Try again.</p>
    `);
    restart();
});

function firstPuzzleCompleted() {
    $('#second-puzzle-container').remove();
    if (usersAttempts < 1) {
        $('#puzzle-container').append(`
            <p class="white-container" id="well-done">WOW! Well done.</p>
        `);
    } else if (usersAttempts < 3) {
        $('#puzzle-container').append(`
            <p class="white-container" id="well-done">Your Smarter Than you look.</p>
        `);
    } else if (usersAttempts > 6 && usersAttempts < 10) {
        $('#puzzle-container').append(`
            <p class="white-container" id="well-done">Yes! You still doing this?</p>
        `);
    } else {
        $('#puzzle-container').append(`
        <p  class="white-container" id="well-done">Yes! Slow and steady.</p>
        `);
    }

    setTimeout(function() {
        $('#well-done').remove();
        startThirdPuzzle();
    }, 2500)
}


// Third puzzle
function startThirdPuzzle() {
    $('#puzzle-container').css('display', 'block')
    $('#puzzle-container').append(`
        <div>
            <div>
                <p class="white-container">Change the background colour to view the instructions, select the correct button to continue.</p>
                <ol id="instructions-list">
                    <li>${colorLetters("Your number isn't 122 but it's half that")}</li>
                    <li>${colorLetters("Add 9 to your number")}</li>
                    <li>${colorLetters("Divide your number by the yellow number in the grid")}</li>
                    <li>${colorLetters("Times your number by the red number in the grid")}</li>
                    <li>${colorLetters("Add 5 to your number then press the number 72")}</li>
                </ol>
            </div>
            <hr>
            <h6 class="text-center white-container">Change Background Colour</h6>
            <div class="d-flex justify-content-center mb-3">
                <button onclick="changeInstructionsBackground('red')">Red</button>
                <button onclick="changeInstructionsBackground('blue')" class="mx-3">Blue</button>
                <button onclick="changeInstructionsBackground('green')">Green</button>
            </div>
            <hr>
            <div id="number-button-container" style="padding-bottom:10px;">

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
            $('#number-button-container').append(`<button class="number-button" onclick="startBonusPuzzle()">${i}</button>`);
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

// bonus level

function startBonusPuzzle() {
    $('#puzzle-container').css('display', 'flex');
    $('#puzzle-container').html('');
    $('#puzzle-container').append('<p class="white-container">Watch the road!</p>');

    setTimeout(function() {
        $('#puzzle-container').html('');
        appendBonusPuzzle();
    }, 2000)

}

let bonusGameRandom = Math.floor(Math.random() * 3);
let ambulance = Math.floor(Math.random() * 5) + 1;
let police = Math.floor(Math.random() * 5) + 1;
let fireTruck = Math.floor(Math.random() * 5) + 1;

console.log(ambulance, fireTruck, police, bonusGameRandom)

function appendBonusPuzzle() {
    if (bonusGameRandom == 0) {
        var question = "How many amulances did you see?";
    } else if (bonusGameRandom == 1) {
        var question = "How many fire trucks did you see?";
    } else {
        var question = "How many police cars did you see?";
    }

    $('#puzzle-container').append(`
        <div id="road-game-container">
            <img src="img/road.jpg" id="road" style="width: 100vw;" class="mb-4">
            <div id="road-question-container">
                <p>
                ${question}
                </p>
                <input type="number" id="car-answer" class="form-control">
                <button class="btn btn-success container-fluid mt-3" onclick="bonusPuzzleAnswer()">Answer</button
            </div>
            
        </div>
    `);

    for (let i = 0; i < ambulance; i++) {
        $('#puzzle-container').append(`<img src="img/amulance.png" class="amulance" id="amulance-${i}" style="right:-${(300 * (i + 2)) - 300}px;">`);
    }

    for (let i = 0; i < fireTruck; i++) {
        $('#puzzle-container').append(`<img src="img/fire-truck.png" class="fire-truck" id="fire-truck-${i}" style="right:-${(300 * (i + 2))- 150}px;">`);
    }

    for (let i = 0; i < police; i++) {
        $('#puzzle-container').append(`<img src="img/police-car.png" class="police-car" id="police-${i}" style="left:-${(300 * (i + 2))- 300}px;">`);
    }

    moveVehicles();

    setTimeout(function() {
        $('#road-question-container').css('display', 'block');
    }, 10000)
}

function moveVehicles() {

    for (let i = 0; i < ambulance; i++) {
        let currentPos = $(`#amulance-${i}`).css('right');
        let newPos = parseInt(currentPos.slice(0, -2)) + 1;
        $(`#amulance-${i}`).css('right', newPos.toString().concat('px'));
    }

    for (let i = 0; i < fireTruck; i++) {
        let currentPos = $(`#fire-truck-${i}`).css('right');
        let newPos = parseInt(currentPos.slice(0, -2)) + 1;
        $(`#fire-truck-${i}`).css('right', newPos.toString().concat('px'));
    }

    for (let i = 0; i < police; i++) {
        let currentPos = $(`#police-${i}`).css('left');
        let newPos = parseInt(currentPos.slice(0, -2)) + 1;
        $(`#police-${i}`).css('left', newPos.toString().concat('px'));
    }


    setTimeout(function() {
        moveVehicles();
    }, 5)
}

function bonusPuzzleAnswer() {
    let answer = parseInt($('#car-answer').val());
    console.log(answer)

    if (bonusGameRandom == 0) {
        // var question = "How many amulances did you see?";
        if (answer == ambulance) {
            startLastPuzzle()
        } else {
            $('#puzzle-container').html('');
            $('#puzzle-container').append('<p class="white-container">Getting close. Start over!</p>');
            restart();
        }
    } else if (bonusGameRandom == 1) {
        // var question = "How many fire trucks did you see?";
        if (answer == fireTruck) {
            startLastPuzzle()
        } else {
            $('#puzzle-container').html('');
            $('#puzzle-container').append('<p class="white-container">Getting close. Start over!</p>');
            restart();
        }
    } else {
        // var question = "How many police cars did you see?";
        if (answer == police) {
            startLastPuzzle()
        } else {
            $('#puzzle-container').html('');
            $('#puzzle-container').append('<p class="white-container">Getting close. Start over!</p>');
            restart();
        }
    }
}


// The last puzzle
var moveableElement;
var moveableStyle;
let move = true;

function startLastPuzzle() {
    $('#puzzle-container').html("<p id='temp-message' class='white-container'>Correct! Saved the best for last.</p>");
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
            <h2>Find the Mising Letter.</h2>
        </div>
        <div id="missing-button-container">
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

$(document).on('click', '.miss-button', function() {
    $(this).html('<img src="https://img.icons8.com/fluent/25/000000/error.png"/>');
    $(this).css('background-color', 'red');
});