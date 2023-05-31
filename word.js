let textbox = document.getElementById("textbox")

textbox.addEventListener('input', function () {
    let text = this.value;
    document.getElementById("char").innerHTML = text.length;


    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function (elm) {
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanList.length;
})