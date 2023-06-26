
let openbox = document.getElementById("open")
let box = document.getElementById("box")

function open_box(){
    box.style.display = "block";
    openbox.style.display = "none";
}

function close_box(){
    box.style.display = "none";
    openbox.style.display = "block";
}