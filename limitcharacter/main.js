
let text = document.getElementById("text")
let result = document.getElementById("result")
let limit = 10;
result.textContent = 0 + "/" + limit;

text.addEventListener("input", function() {
    let textLength = text.value.length;
    result.textContent = textLength + "/" + limit;

    if (textLength > limit){
        text.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    } else{
        text.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
})