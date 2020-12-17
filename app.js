const plus = document.querySelector('.plus').innerHTML;
const minus = document.querySelector('.minus').innerHTML;
const division = document.querySelector('.division').innerHTML;
const multiplication = document.querySelector('.multiplication').innerHTML;
function operate() {
    console.log('Hello there!');
    console.log('This calculator is made in Java Script, HTML5 and CSS3!');
}
operate();
document.querySelector('.plus').addEventListener('click', function () {
    console.log('You just pressed plus operator!');
});
document.querySelector('.minus').addEventListener('click', function () {
    console.log('You just pressed minus operator!');
});
document.querySelector('.division').addEventListener('click', function () {
    console.log('You just pressed division operator!');
});
document.querySelector('.multiplication').addEventListener('click', function () {
    console.log('You just pressed multiplication operator!');
});


/*document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });*/
/*document.querySelector('.calculator span').click(function (event) {
    if (!event.detail || event.detail == 1) { return true; }
    else { return false; }
});*/ //potentional code for solving multiple times clicking button
/*old_timestamp == null;

$('.calculator span').on('click', function (event) {

    // code executed at first load
    // not working if you press too many clicks, it waits 1 second
    if (old_timestamp == null || old_timestamp + 1000 < event.timeStamp) {
        // write the code / slide / fade / whatever
        old_timestamp = event.timeStamp;
    }
});*/
