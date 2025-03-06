document.addEventListener("DOMContentLoaded", () => {
    const createList = document.getElementById("createList");

    if(createList){
        createList.addEventListener("click", () => {
            window.location.href = "createList.html";
        });
    }
});