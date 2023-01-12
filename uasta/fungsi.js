
// title
let docTitle = document.title;
window.addEventListener("blur", () =>{
document.title = "Kenapa Pindah :(";
})
window.addEventListener("focus", () =>{
document.title = docTitle;
})

//