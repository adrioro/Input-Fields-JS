var app = {};

//A shorter way to get elements

app.getElement = function (element) {
    return document.getElementById(element);
}

//Get elements required

app.entry = app.getElement("entry");
app.output = app.getElement("output");

//Creat event handler

app.entry.onkeyup = function () {
    app.output.innerText = this.value;
}