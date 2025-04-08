const watch = document.getElementById('watch');
const calendar = document.getElementById('calendar');
const message = document.getElementById('message');

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time =`${hh}:${mm}:${ss}`;
    watch.innerHTML = time;

    currentDate();

    showMessage(time);
};

setInterval(currentTime, 1000);

function currentDate() {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();

    dd = (dd < 10) ? ("0" + dd ) :(dd);
    mm = (mm < 10) ? ("0" + (mm+1)) : (mm+1);
    yyyy = (yyyy < 10) ? ("0" + yyyy) : (yyyy);

    let day = `${dd}/${mm}/${yyyy}`;
    calendar.innerHTML = day;
};

function showMessage(time) {
    if (time >= '00:01:00' && time <= '07:00:00') {
        message.innerText = "Es hora de descansar. Apaga y sigue mañana";
    } else if (time > '07:01:00' && time <= '12:00:00') {
        message.innerText = "Buenos días, desayuna fuerte y a darle al código";
    } else if (time > '12:01:00' && time <= '14:00:00') {
        message.innerText = "Echa un rato más pero no olvides comer";
    } else if (time > '14:01:00' && time <= '16:00:00') {
        message.innerText = "Espero que hayas comido";
    } else if (time > '16:01:00' && time <= '18:00:00') {
        message.innerText = "Buenas tardes, el último empujón";
    } else if (time > '18:01:00' && time <= '22:00:00') {
        message.innerText = "Esto ya son horas extras, piensa en parar pronto";
    } else {
        message.innerText = "Buenas noches, es hora de pensar en parar y descansar";
    }
};

function currentDateTime() {
    let today = new Date();
    const f = new Intl.DateTimeFormat("es-sp", {
        dateStyle: "short",
        timeStyle: "medium"
    });
    console.log(f.format(today));
};
currentDateTime();

