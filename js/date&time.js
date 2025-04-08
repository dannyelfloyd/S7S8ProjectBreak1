console.log('HTML & JS conected');

const watch = document.getElementById('watch');
const calendar = document.getElementById('calendar');

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
};

setInterval(currentTime, 1000);

function currentDate() {
    let date = new Date;
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();

    dd = (dd < 10) ? "0" + dd : dd;
    mm = (mm < 10) ? "0" + (mm+1) : (mm+1);
    yyyy = (yyyy < 10) ? "0" + yyyy : yyyy;

    let day = `${dd}/${mm}/${yyyy}`;
    calendar.innerHTML = day;
};
currentDate();

function currentDateTime() {
    let today = new Date;
    const f = new Intl.DateTimeFormat("es-sp", {
        dateStyle: "short",
        timeStyle: "medium"
    });
    console.log(f.format(today));
};
currentDateTime();