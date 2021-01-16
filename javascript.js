// settings

function restart() {
    setTimeout(function() {
        location.reload();
    }, 1500)
}

$(document).on('click', '#welcome-close', function() {
    $('#welcome-message').remove();
    sessionStorage.setItem('welcomeMessageRead', 'read');
})

var welcomeMessage = sessionStorage.getItem('welcomeMessageRead');

if (welcomeMessage != 'read') {
    $('#puzzle-container').append(`
    <div id="welcome-message">
        <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" id="welcome-close" />
        <p>Forget about the past, you can't change it. <br>Forget about the future, you can't predict it. <br> Forget about the present, I didn't get you one.<br><br>Welcome to your birthday puzzle!</p>
    </div>
    `)
}

// first

var firstButton = 30;

$('#first-button').on('click', function() {
    firstButton--;
    if (firstButton == 29) {
        $('#first-button').css('background-color', 'blue');
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

$(document).on('click', '.wrong-button', function() {
    $('#puzzle-container').append(`
        <p>Close... Try again.</p>
    `);
    restart();
});

$(document).on('click', '#navy', function() {
    $('#puzzle-container').append(`
        <p id="well-done">Your Smarter Than you look.</p>
    `);
    setTimeout(function() {
        startThirdPuzzle();
    }, 2500)
})

// Third puzzle
function startThirdPuzzle() {
    $('#well-done').remove();
};