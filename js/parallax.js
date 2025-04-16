const title = document.querySelector('#title');
const Layer1Front = document.querySelector('#Layer1Front');
const layer2Right = document.querySelector('#layer2Right');
const layer2Left = document.querySelector('#layer2Left');
const layer3 = document.querySelector('#layer3');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    layer2Left.style.right = scroll + 'px';
    layer2Right.style.left = scroll + 'px';
    layer3.style.top = scroll * 2.5 + 'px';
    Layer1Front.style.top = scroll * 1 + 'px';
    title.style.bottom = scroll +'px';


});