var app = {};

//A shorter way to get elements

app.getElement = function (element) {
    return document.getElementById(element);
}
app.entry = app.getElement("entry");
app.output = app.getElement("output");

//Get elements required