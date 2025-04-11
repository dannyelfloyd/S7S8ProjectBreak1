console.log('HTML & JS conected');
  
function changeBG() {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);
    document.body.style.backgroundImage = `url(./img/index/${randomNumber}.jpg)`;
}
setInterval(changeBG, 4000);
changeBG();