var pEl = $('#currentDay');
var timeblockEl = $('.timeblock');
pEl.text(moment().format(' dddd, MMMM Do YYYY'));
var idClicked;
var textarea1 = $('#textarea1');
var textarea2 = $('#textarea2');
var textarea3 = $('#textarea3');
var textarea4 = $('#textarea4');
var textarea5 = $('#textarea5');
var textarea6 = $('#textarea6');
var textarea7 = $('#textarea7');
var textarea8 = $('#textarea8');
var textarea9 = $('#textarea9');
var date = new Date();
var getHours = date.getHours();

var row = $('.row');
var hour = $('.hour');
var hourValue = $('.hour').attr('value');
function colorCodeTimeBlock() {
    if (hourValue < getHours) {

        row.attr('class', 'past');

    }
    else if (hourValue > getHours) {
        row.attr('class', 'future');
    }
    else {
        row.attr('class', 'present');
    }
}
function saveTextAreaEvents() {
    // Save related form data as an object
    var textAreaValue = {
        textarea1: textarea1.val(),
        textarea2: textarea2.val(),
        textarea3: textarea3.val(),
        textarea4: textarea4.val(),
        textarea5: textarea5.val(),
        textarea6: textarea6.val(),
        textarea7: textarea7.val(),
        textarea8: textarea8.val(),
        textarea9: textarea9.val()

    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("textAreaValue", JSON.stringify(textAreaValue));
}

function renderTextAreaEvents() {
    // Use JSON.parse() to convert text to JavaScript object
    var newtextAreaValue = JSON.parse(localStorage.getItem("textAreaValue"));
    textarea1.text(newtextAreaValue.textarea1);
    textarea2.text(newtextAreaValue.textarea2);
    textarea3.text(newtextAreaValue.textarea3);
    textarea4.text(newtextAreaValue.textarea4);
    textarea5.text(newtextAreaValue.textarea5);
    textarea6.text(newtextAreaValue.textarea6);
    textarea7.text(newtextAreaValue.textarea7);
    textarea8.text(newtextAreaValue.textarea8);
    textarea9.text(newtextAreaValue.textarea9);

}


$(".timeblock").click(function (event) {

    saveTextAreaEvents();
    renderTextAreaEvents();

});
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    colorCodeTimeBlock();
    renderTextAreaEvents();
}
init();

