document.addEventListener("DOMContentLoaded", () => {
    const returnBtn = document.getElementById("returnBtn");

    if(returnBtn){
        returnBtn.addEventListener("click", () => {
            window.location.href = "main.html";
        });
    }
});