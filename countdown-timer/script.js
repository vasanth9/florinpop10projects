const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


const newYears = '1 Jan 2021'

function countdown() {
    const newYearsdate = new Date(newYears)
    const currentDate = new Date();
    const tseconds = (newYearsdate - currentDate) / 1000;
    const days = Math.floor(tseconds / 3600 / 24)
    const hours = Math.floor(tseconds / 3600) % 24;
    const minutes = (Math.floor(tseconds / 60)) % 60;
    const seconds = Math.floor(tseconds) % 60
    console.log(days, hours, minutes, seconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);