const inputLength = document.getElementById("inputLength");
const btnGenerate = document.getElementById("btnGenerate");
const result = document.getElementById("result");

function generatePasssword(pwchars, length) {
    const limit = 256 - (256 % pwchars.length);
    
    
    let password = "";
    let randval;
    
    for(let i = 0; i < length; i++) {
        do {
            randval = window.crypto.getRandomValues(new Uint8Array(1))[0];
        } while (randval >= limit);
        
        password += pwchars[randval % pwchars.length];
    };
    
    return password;
};

function genarate() {
    let length = parseInt(inputLength.value);
    
    const pwchars  = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";

    console.log(generatePasssword(pwchars, length));
    result.innerText = generatePasssword(pwchars, length); 
};
btnGenerate.addEventListener("click", () => {
    genarate(); 
});