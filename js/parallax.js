const title = document.querySelector('#title');
const layer1Front = document.querySelector('#layer1Front');
const layer2Right = document.querySelector('#layer2Right');
const layer2Left = document.querySelector('#layer2Left');
const layer3 = document.querySelector('#layer3');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    console.log(scroll);

    layer2Left.style.right = scroll + 'px';
    layer2Right.style.left = scroll + 'px';
    layer3.style.top = scroll * 2.5 + 'px';
    title.style.bottom = scroll +'px';

    layer1Front.style.top = scroll * 1 + 'vh';
    /*if (scroll >= 70) {
        layer1Front.style.top = scroll * 1 + 'vh';
        
    } else {
        layer1Front.style.top = '70vh';
    };*/

});