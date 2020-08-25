const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

const secondHand = document.getElementsByClassName('second-hand');
const minuteHand = document.getElementsByClassName('min-hand');
const hourHand = document.getElementsByClassName('hour-hand');

//to do it on page load
let displayMinutes;
let displaySeconds;
let displayHours;
getTime(true);

function getTime(initial) {
    let today = new Date();
    let seconds = today.getSeconds();
    let minutes = today.getMinutes();
    let hours = today.getHours();
    if (initial == true) {
        displayMinutes = minutes;
        displaySeconds = seconds;
        displayHours = hours;
    } else {
        displaySeconds++;

        if (displaySeconds % 60 == 0) {
            displayMinutes++;
        }

        if (displayMinutes % 60 == 0 && displaySeconds % 60 == 0) {
            displayHours++;
        }

    }
    updateDisplay(hours, minutes, seconds, today);
}

//to do it every second
setInterval("getTime(false)", 1000);

function updateDisplay(hours, minutes, seconds, today) {
    let date = `${today.getFullYear()} - ${today.getMonth() + 1} - ${today.getDate()}`;
    let time = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    dateElement.innerHTML = date;
    timeElement.innerHTML = time;



    changeSecondHand();
    changeMinuteHand();
    changeHourHand();

    function changeSecondHand() {
        let degrees = (displaySeconds * 6) + 90;
        secondHand[0].style.transform = `rotate(${degrees}deg)`;
    }

    function changeMinuteHand() {
        let degrees = (displayMinutes * 6) + 90;
        minuteHand[0].style.transform = `rotate(${degrees}deg)`;
    }

    function changeHourHand() {
        let degrees = (displayHours * 30) + 90;
        hourHand[0].style.transform = `rotate(${degrees}deg)`;
    }
};