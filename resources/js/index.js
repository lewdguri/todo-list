
function createToDo() {
    const template = document.querySelector("#todo-template");
    let formText = document.querySelector("#form-text");

    let clon = template.content.cloneNode(true);
    let p = clon.querySelector("p");
    p.textContent = formText.value;
    document.querySelector(".todo-list").appendChild(clon);

    formText.value = "";
}

function isItEnter(event){
    if(event.key === 'Enter'){
        createToDo();
    }
}

function deleteParent(btn){
    btn.parentElement.remove();
}

function reset(){
    while (document.querySelector(".todo-list").firstChild) {
        document.querySelector(".todo-list").removeChild(document.querySelector(".todo-list").lastChild);
    }
}
