document.addEventListener("DOMContentLoaded", () => {
    const createList = document.getElementById("createList");

    if(createList){
        createList.addEventListener("click", () => {
            window.location.href = "createList.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const personalList = document.getElementById("personalList");

    if(personalList){
        personalList.addEventListener("click", () => {
            window.location.href = "personalList.html";
        });
    }
});