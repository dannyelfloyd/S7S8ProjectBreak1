console.log('HTML & JS conected');

const tagInput = document.getElementById("tagInput");
const urlInput = document.getElementById("urlInput");
const btnAdd = document.getElementById("btnAdd");
const linksDiv = document.getElementById("linksDiv");

function updateLinks() {
    console.log('localStorage',localStorage);
    console.log(JSON.stringify(localStorage));
    const localLinks = JSON.stringify(localStorage);
    console.log('localLinks',localLinks);
    const localObj = JSON.parse(localLinks);
    console.log('localObj',localObj);

    let localObjKeys = Object.keys(localObj);
    console.log('localObjKeys',localObjKeys);
    for (let index = 0; index < localObjKeys.length; index++) {
        const localObjKey = localObjKeys[index];
        const localObjKeyUrl = localObj[localObjKey];

        console.log('localObjKeysURL',localObjKeyUrl);
        console.log('localObjKeysTAG',localObjKey);
        showLinks(localObjKey,localObjKeyUrl);
    };
};

updateLinks();

document.addEventListener("DOMContentLoaded", (event) => {

    console.log(event);

    btnAdd.addEventListener("click", () => {
        const tagValue = tagInput.value;
        const urlValue = urlInput.value;
        console.log(localStorage);
        addLink(tagValue,urlValue);
        
    });
    
    const btnsDelete = document.querySelectorAll('.btnDelete');
    console.log(btnsDelete);
    btnsDelete.forEach(button => button.addEventListener('click', (e) => {
        deleteLink(e);
    }));
});


function addLink(tagValue,urlValue) {
    const tagLocal = localStorage.getItem(tagValue);
    if ( tagLocal == tagValue) {
        console.log('coincide');
        // Pop up "enlace con el mismo nombre ya gurdado. quieres sustituirlo?"
    } else {
        localStorage.setItem(`${tagValue}`,`${urlValue}`);
        showLinks(tagValue,urlValue);
        tagInput.value = "";
        urlInput.value = "";
    };
    window.location.reload();
    console.log(localStorage);
};

function showLinks(tag, url) {
    linksDiv.innerHTML += `
    <li id='${tag}'>
        <a href="${url}">${tag}</a>
        <button class="btnDelete">X</button>
    </li>
    `;
};
function deleteLink(e) {
    //localStorage.clear();
    console.log(e.target.parentNode);
    const clickedLi = e.target.parentNode;
    linksDiv.removeChild(clickedLi);

    console.log(clickedLi.getAttribute('id'));
    const clickedTag = clickedLi.getAttribute('id');
    localStorage.removeItem(`${clickedTag}`);
    //window.location.reload();


};